import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {FacturaService} from '../factura.service';
import {FacturaDetail} from '../factura-detail';
import {ToastrService} from 'ngx-toastr';
import { FacturaCreateComponent } from '../factura-create/factura-create.component';
import { Factura } from '../factura';


@Component({
    selector: 'app-factura-edit',
    templateUrl: './factura-edit.component.html',
    styleUrls: ['./factura-edit.component.css'],
    providers: [DatePipe]
})
export class FacturaEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param authorService The authors' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private facturaService: FacturaService,
        private toastrService: ToastrService,
    ) {}

     /**
    * The id of the factura that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() factura_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an editorial
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user updated a new editorial
   */
   @Output() update = new EventEmitter();

    /**
    * The author id as received from the parent component
    */
    @Input() factura: FacturaDetail;

    /**
    * Retrieves the information of the factura
    */
   getFactura(): void {
    this.facturaService.getFacturaDetail(this.factura_id)
        .subscribe(factura => {
            this.factura = factura;
        });
}


    /**
    * Updates the information of the factura
    */
    editFactura(): void {
        this.facturaService.updateFactura(this.factura)
            .subscribe(() => {
                this.toastrService.success("The factura's information was updated", "Factura edition");
            });
        this.update.emit();
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelFactura(): void {
        this.cancel.emit();
    }


    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.factura = new FacturaDetail(this.factura.numero, this.factura.precio, this.factura.fechaCompra,this.factura.photos);
        this.getFactura();
    }

    /**
    * This function will be called when the user chooses another author to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
