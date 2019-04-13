import { Component, OnInit,Input } from '@angular/core';
import {ClienteService} from '../cliente.service';
import { FormaDePagoDetail } from '../../forma-de-pago/forma-de-pago-detail';
import {FormaDePagoModule} from '../../forma-de-pago/forma-de-pago.module';

@Component({
  selector: 'cliente-forma-de-pago',
  templateUrl: './cliente-forma-de-pago.component.html',
  styleUrls: ['./cliente-forma-de-pago.component.css']
})
export class ClienteFormaDePagoComponent implements OnInit {

  /**
   * Constructor del componente
   * @param clienteService Servicio proveedor del cliente
   */
  constructor(private clienteService: ClienteService) { }

/**
 * Id del cliente
 */
  @Input() clienteId: number;
 /*isCollapsed: boolean = true;*/
  
  /**
   * Las formas de pago del cliente
   */
  formasDePago: FormaDePagoDetail[];

  
/**
 * Trae las formas de pago del cliente
 * @param clienteId el cliente del que se quieren traer las formas de pago
 */
  getFormasDePago(clienteId: number): void {
    console.log("getFormasDePago " + clienteId);
    this.clienteService.getClienteFormasDePago(clienteId)
      .subscribe(fdp => {
        this.formasDePago = fdp
      });
  }

  /**
   * Trae las formas de pago
   */
  getClienteFormasDePago(): void {
    console.log("getClienteFormasDePago :" + this.clienteId);
    this.getFormasDePago(this.clienteId);
    /*this.toggleformasDePago();*/
  }

  /**
   * Ocultar 
   */
  toggleformasDePago(): void {

    this.isCollapsed = !this.isCollapsed;
  }
  /**
  * The method which initializes the component.
  * We need to create the curso so it is never considered as undefined
  */
  ngOnInit() {
     if (this.formasDePago == undefined)
     this.formasDePago = [new FormaDePagoDetail()];
    this.isCollapsed  = true;
  }

}
