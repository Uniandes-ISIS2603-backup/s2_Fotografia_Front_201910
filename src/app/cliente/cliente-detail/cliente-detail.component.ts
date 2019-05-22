import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { ClienteDetail } from '../cliente-detail';
import { ClienteFormaDePagoComponent } from '../cliente-forma-de-pago/cliente-forma-de-pago.component';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit, OnChanges {

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
  //clienteDetail :ClienteDetail;

  clienteLogin: string;

  /**
  * El id del cliente que viene en el path get .../clientes/clienteId
  */
  clienteId: number;


  /**
    * Shows or hides the edit component.
    */
  showEdit: boolean;


  showDelete: boolean;

  loader: any;


  /**
   * Para ver su hijo (forma de pago)
   */
  @ViewChild(ClienteFormaDePagoComponent)
  formaDePagoComponent: ClienteFormaDePagoComponent;


  /**
   * Lo que se quiere hacer cuando se cargue el componente
   * @param params 
   */
  onLoad(params) {

    this.clienteId = +this.route.snapshot.paramMap.get('id');


    if (this.clienteId = 0) {
      console.log(" en detail " + this.clienteId);
      /*this.clienteDetail = new ClienteDetail();*/
      this.clienteId = this.clienteDetail.id
    }



  }

  /**
   * Inicializa el componente
   */
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
   
    if (this.clienteLogin === undefined) {
      this.clienteLogin = JSON.parse(localStorage.getItem('cliente'));
      this.getClienteDetailLogin();
    }
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
  getClienteDetailLogin(): ClienteDetail {

    this.clienteService.getClienteLogin(this.clienteLogin)
      .subscribe(clienteDetail => {
        this.clienteDetail = clienteDetail
      });

    return this.clienteDetail;
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


  deleteCliente(): void {
    this.showDelete = true;
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
  ngOnChanges() {
    this.formaDePagoComponent.isCollapsed = true;
  }

}