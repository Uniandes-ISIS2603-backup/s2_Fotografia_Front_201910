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


/**
 * Constructor del componente
 * @param clienteService el proveedor de servicios del cliente
 */
  constructor(private clienteService:ClienteService) { }

  /**
   * El id del cliente
   */
clienteId: number;

/**
 * El cliente en detalle
 */
clienteDetail : ClienteDetail;

loader: any;

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

  /**
   * Trae el detalle del cliente
   */
  getClienteDetail(): void {
    this.clienteService.getClientesDetail(this.clienteId)
        .subscribe(clienteDetail => 
            this.clienteDetail = clienteDetail  
        );
}

/**
 * Lo que hace cuando se selecciona (con el boton)
 * @param clienteId id del cliente
 */
onSelected(clienteId: number):void {
    this.clienteId = clienteId;
    this.clienteDetail = new ClienteDetail();
    this.clienteId = clienteId;
    this.getClienteDetail();
    console.log("Id en list "+this.clienteDetail.id)
    
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


/**
 * Inicializa el componente
 */
   ngOnInit() {
    this.clienteDetail =undefined;
    this.clienteId = undefined;
    this.getClientes();
  }



}