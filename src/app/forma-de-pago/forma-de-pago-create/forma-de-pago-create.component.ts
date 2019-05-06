import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormaDePagoService} from '../forma-de-pago.service';
import {FormaDePagoDetail} from '../forma-de-pago-detail';
import {ToastrService} from 'ngx-toastr';
import {DatePipe} from '@angular/common';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{Cliente} from '../../cliente/cliente';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forma-de-pago-create',
  templateUrl: './forma-de-pago-create.component.html',
  styleUrls: ['./forma-de-pago-create.component.css']
})
export class FormaDePagoCreateComponent implements OnInit {

    /**
     * Constructor del componente
     * @param dp Datepipe para darle formato a las fechas
     * @param router 
     * @param formaDePagoService El proveedor de servicios de las formas de pago
     * @param toastrService El toastr que manda mensajes al usuario
     */
  constructor(private dp: DatePipe,private router: Router,
    private formaDePagoService: FormaDePagoService, private toastrService: ToastrService
) {}

/**
* La nueva forma de pago
*/
formaDePago: FormaDePagoDetail;

/**
 * Los clientes de la aplicacion
 */
clientes: Cliente[];

/**
 * El cliente de la forma de pago
 */
cliente: Cliente;

/**
* El output que le dice al componente padre que ya no se quiere crear una forma de pago
*/
@Output() cancel = new EventEmitter();

/**
* El output que le dice al componente padre que se creo una forma de pago
*/
@Output() create = new EventEmitter();



/**
* Crea una forma de pago
*/
createFormaDePago(): FormaDePagoDetail {
   let dateB: Date = new Date(this.formaDePago.fechaVencimiento.year, this.formaDePago.fechaVencimiento.month -1, this.formaDePago.fechaVencimiento.day);

   this.formaDePago.fechaVencimiento = this.dp.transform(dateB, 'yyyy-MM-dd');
   this.formaDePago.fechaVencimiento += "T00:00:00-05:00";
    this.formaDePagoService.createFormaDePago(this.formaDePago)
        .subscribe((fdp) => {
            this.formaDePago = fdp;
            this.create.emit();
            this.router.navigate(['/formasDePago/list'])
            this.toastrService.success("The forma de pago was created", "forma de pago creation");
 });

    return this.formaDePago;
}

/**
* Emits the signal to tell the parent component that the
* user no longer wants to create  formaDePago
*/
cancelCreation(): void {
    this.cancel.emit();
}

/**
*Inicializa el componente
*/
ngOnInit() {
    this.formaDePago = new FormaDePagoDetail();
}


/**
 * Metodo para ocultar del form la barra de tipo de tarjeta, en caso de que la tarjeta sea debito
 * id="ifYes" style="display: none;"  en el html de tipo tarj cred
 * @param that 
 * 
 */
yesnoCheck(that) {
    if (that.value == "Credito") 
    {
        alert("check");
        document.getElementById("ifYes").style.display = "block";
    } else {
        document.getElementById("ifYes").style.display = "none";
    }
}


}