import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {ClienteService} from '../cliente.service';
import {ClienteDetail} from '../cliente-detail';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit, OnChanges {

/**
    * Constructor for the component
    * @param clienteService El proveedor de servicios del cliente
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private clienteService: ClienteService,
    private toastrService: ToastrService,
) {}

 /**
* El id del cliente que se quiere modificar
* This is passed as a parameter by the parent component
*/
@Input() clienteId: number;

/**
* The output which tells the parent component
* that the user no longer wants to edit an client
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user updated a new client
*/
@Output() update = new EventEmitter();

/**
* The client id as received from the parent component
*/
@Input() cliente: ClienteDetail;


/**
* Retrieves the information of the client
*/
getCliente(): void {
this.clienteService.getClientesDetail(this.clienteId)
    .subscribe(cli => {
        this.cliente = cli;
    });
}


/**
* Updates the information of the cliente
*/
editCliente(): void {
    this.clienteService.updateCliente(this.cliente)
        .subscribe(() => {
            this.toastrService.success("La informacion del cliente fue actualizada", "Cliente edition");
        });
        this.update.emit();
}

/**
* Emits the signal to tell the parent component that the
* user no longer wants to edit
*/
cancelEdition(): void {
    this.cancel.emit();
}


/**
* This function will initialize the component
*/
ngOnInit() {
    this.cliente = new ClienteDetail();
    this.getCliente();
}

/**
* This function will be called when the user chooses cliente author to edit
*/
ngOnChanges() {
    this.ngOnInit();
}
}