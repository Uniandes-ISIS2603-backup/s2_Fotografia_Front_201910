import { Component, OnInit } from '@angular/core';
import{Cliente} from '../cliente';
import{ClienteService} from '../cliente.service';
import {ClienteDetail} from '../cliente-detail';

/**
 * El componente para la lista de clientes
 */
@Component({
  selector: 'list-cliente',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(private clienteService:ClienteService) { }

clienteId: number;
selected : Cliente;

/**
    * Shows or hides the create component
    */
   showCreate: boolean;

   /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;

  /**
   * La lista de clientes
   * =[new Cliente(2,"Helena Narvaez", "hele11", "he@gmail.com","f"), new Cliente(2,"Fabian Mejia", "fmejia", "fm@gmail.com","h")]
  */
  clientes: Cliente[];

    getClientes():void
  {
    this.clienteService.getClientes().subscribe(losClientes => this.clientes= losClientes);
  }

  getClienteDetail(): void {
    this.clienteService.getClientesDetail(this.clienteId)
        .subscribe(selected => {
            this.selected = selected
        });
}

onSelected(clienteId: number):void {
    this.clienteId = clienteId;
    this.selected = new ClienteDetail();
    this.clienteService.getClientesDetail(clienteId).subscribe(c=> this.selected=c);
}

  /**
    * Shows or hides the create component
    */
   showHideCreate(): void {
    this.showEdit = false;
    this.showCreate = !this.showCreate!
}

/**
* Shows or hides the create component
*/
showHideEdit(clienteId: number): void {
    if (!this.showEdit || (this.showEdit && clienteId != this.clienteId)) {
        this.showCreate = false;
        this.showEdit = true;
        this.clienteId = clienteId;
    }
    else {
        this.showEdit = false;
    }
}

   ngOnInit() {
    this.getClientes();
  }

}