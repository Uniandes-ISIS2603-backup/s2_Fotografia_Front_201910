import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {FormaDePagoService} from '../forma-de-pago.service';
import {FormaDePagoDetail} from '../forma-de-pago-detail';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forma-de-pago-edit',
  templateUrl: './forma-de-pago-edit.component.html',
  styleUrls: ['./forma-de-pago-edit.component.css'],
    providers: [DatePipe]
})
export class FormaDePagoEditComponent implements OnInit, OnChanges {


/**
 * Id del cliente del cual se quiere editar la forma de pago
 */
    @Input() clienteId : number;

   /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param formaDePagoService The formaDePago' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(private dp: DatePipe,
        private formaDePagoService: FormaDePagoService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

/**
    * The id of the formaDePago that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() formaDePagoId: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to edit a forma de pago
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user updated a forma de pago
   */
   @Output() update = new EventEmitter();

    /**
    * The forma de pago detail as received from the parent component
    */
    @Input() formaDePago: FormaDePagoDetail;

    /**
    * Retrieves the information of the forma de pago
    */
   getFormaDePago(): void {
    this.formaDePagoService.getFormaDePagoDetail(this.formaDePagoId)
        .subscribe(fdp => {
            this.formaDePago = fdp;
        });
}


    /**
    * Updates the information of the formadepago
    */
    editFormaDePago(): void {

        let dateB: Date = new Date(this.formaDePago.fechaVencimiento.year, this.formaDePago.fechaVencimiento.month , this.formaDePago.fechaVencimiento.day);

        this.formaDePago.fechaVencimiento = this.dp.transform(dateB, 'yyyy-MM-dd');
        this.formaDePago.fechaVencimiento += "T00:00:00-05:00";
        this.formaDePagoService.updateFormaDePago(this.formaDePago)
            .subscribe(() => {
                this.formaDePagoService.createClienteFormaDePago(this.clienteId,this.formaDePago.id)
            .subscribe();
               // this.router.navigate(['/clientes/login']);
                this.toastrService.success("La informacion de la forma de pago fue actualizada", "Forma De Pago edition");  
            });
        this.update.emit();
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to edit a forma de pago
    */
    cancelEdition(): void {
        this.cancel.emit();
    }


    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.formaDePago = new FormaDePagoDetail();
        this.getFormaDePago();
    }

    /**
    * This function will be called when the user chooses another forma de pago to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}