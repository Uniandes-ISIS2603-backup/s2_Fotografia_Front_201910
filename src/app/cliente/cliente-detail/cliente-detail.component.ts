import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {ClienteService} from '../cliente.service';
import {ClienteDetail} from '../cliente-detail';
import { ClienteFormaDePagoComponent } from '../cliente-forma-de-pago/cliente-forma-de-pago.component';


import{FormaDePagoListComponent} from '../../forma-de-pago/forma-de-pago-list/forma-de-pago-list.component';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit , OnChanges
{

  /**
   * Constructor del componente
   * @param clienteService proveedor de servicios del cliente
   * @param route la ruta que permite retraer el id
   */
constructor(private clienteService: ClienteService,
    private route: ActivatedRoute) { }

    /**
     * El cliente detail que recibe de listar
     * Cuando se selecciona un cliente de la lista
     */
  @Input() clienteDetail: ClienteDetail;

/**
* El id del cliente que viene en el path get .../clientes/clienteId
*/
clienteId: number;


  /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;


    loader: any;

/**
 * Para ver su hijo (forma de pago)
 */
@ViewChild (ClienteFormaDePagoComponent)
formaDePagoComponent: ClienteFormaDePagoComponent;


/**
 * Lo que se quiere hacer cuando se cargue el componente
 * @param params 
 */
  onLoad(params) {

    this.clienteId = +this.route.snapshot.paramMap.get('id');
    if(this.clienteId = 0){
    console.log(" en detail " + this.clienteId);
    /*this.clienteDetail = new ClienteDetail();*/
    this.clienteId = this.clienteDetail.id
   }
  }

  /**
   * Inicializa el componente
   */
  ngOnInit() {

    console.log("Id cuando inicia"  +this.clienteDetail.id)
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
    
   console.log("id del cliente" + this.clienteId)
    
  }

  /**
   * Permite que se detenga la subscripcion
   */
  ngOnDestroy() {
    this.loader.unsubscribe();
  }

  /**
   * Devuelve el detalle del cliente
   */
  getClienteDetail(): void {
    this.clienteService.getClientesDetail(this.clienteId)
      .subscribe(clienteDetail => {
        this.clienteDetail = clienteDetail
      });
  }

  
  /**
* Shows or hides the create component
*/
showHideEdit(clienteId: number): void {
  if (!this.showEdit || (this.showEdit && clienteId != this.clienteId)) {
      this.showEdit = true;
      this.clienteId = clienteId;
  }
  else {
      this.showEdit = false;
  }
}

/**
 * Actualiza la informacion del cliente
 */
updateCliente(): void {
  this.showEdit = false;
}

/**
 * Lo que debe hacer cuando reciba un cambio
 */
ngOnChanges() 
{
  this.formaDePagoComponent.isCollapsed = true;
}

}