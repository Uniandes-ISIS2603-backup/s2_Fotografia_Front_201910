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

  constructor(private dp: DatePipe,private router: Router,
    private formaDePagoService: FormaDePagoService, private toastrService: ToastrService
) {}

/**
* The new client
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
* The output which tells the parent component
* that the user no longer wants to create a client
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user created a new cliente
*/
@Output() create = new EventEmitter();



/**
* Creates a client
*/
createFormaDePago(): FormaDePagoDetail {

    /*
    let dateB: Date = new Date(this.formaDePago.fechaVencimiento.getFullYear
        (), this.formaDePago.fechaVencimiento.getMonth(), this.formaDePago.fechaVencimiento.getDate());

    this.formaDePago.fechaVencimiento = this.dp.transform(dateB, 'yyyy-MM-dd');
    */

   let dateB: Date = new Date(this.formaDePago.fechaVencimiento.year, this.formaDePago.fechaVencimiento.month , this.formaDePago.fechaVencimiento.day);

   this.formaDePago.fechaVencimiento = this.dp.transform(dateB, 'yyyy-MM-dd');
   this.formaDePago.fechaVencimiento += "T00:00:00-05:00";
    console.log(this.formaDePago);
    console.log(this.formaDePago.fechaVencimiento);
    this.formaDePagoService.createFormaDePago(this.formaDePago)
        .subscribe((fdp) => {
            this.formaDePago = fdp;
            this.create.emit();
            this.router.navigate(['/formasDePago/'+ fdp.id])
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
* This function will initialize the component
*/
ngOnInit() {
    this.formaDePago = new FormaDePagoDetail();
}


/**
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