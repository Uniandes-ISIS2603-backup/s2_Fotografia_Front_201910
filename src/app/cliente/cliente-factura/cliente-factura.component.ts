import { Component, OnInit, Input } from '@angular/core';
import {ClienteService} from '../cliente.service';
import {FacturaService} from '../../factura/factura.service';
import {Factura} from '../../factura/factura'
import { FacturaDetail } from '../../factura/factura-detail';

@Component({
  selector: 'app-cliente-factura',
  templateUrl: './cliente-factura.component.html',
  styleUrls: ['./cliente-factura.component.css']
})
export class ClienteFacturaComponent implements OnInit {

  /**
   * Constructor del componente
   * @param clienteService Servicio proveedor del cliente
   */
  constructor(private clienteService: ClienteService, private facturaService: FacturaService) { }

  /**
   * Id del cliente
   */
  @Input() clienteId: number;

  @Input() disabledFac: boolean;

  isCollapsed: boolean = true;

  /**
  * Shows or hides the detail component.
  */
  showDetail: boolean = true;


  /**
    * Shows or hides the create component
    */
  showCreate: boolean;


  /**
   * Shows or hides the edit component.
   */
  showEdit: boolean;

  /**
   * Las formas de pago del cliente
   */
  facturas: Factura[];
  selected: Factura;
  facturaId: number;



  /**
   * Trae las facturas del cliente
   * @param clienteId el cliente del que se quieren traer las facturas
   */
  getFacturas(clienteId: number): void {
    console.log("getFacturas" + clienteId);
    this.clienteService.getClienteFacturas(clienteId)
      .subscribe(facturas => {
        console.log("Tamaño" + facturas.length);
        this.facturas = facturas
      });
    console.log(this.facturas.length);
  }

  /**
   * Trae las facturas
   */
  getClienteFacturas(): void {
    console.log("getClienteFacturas :" + this.clienteId);
    this.getFacturas(this.clienteId);
    this.togglefacturas();
  }

  /**
   * Ocultar 
   */
  togglefacturas(): void {

    this.isCollapsed = !this.isCollapsed;
  }



  /**
  * The method which initializes the component.
  * We need to create the curso so it is never considered as undefined
  */
  ngOnInit() {
    if (this.facturas == undefined)
      this.facturas = [new FacturaDetail(0,0,0,null)];
    this.isCollapsed = true;
  }

  /**
   * Devuelve la ffactura en detalle
   */
  getFormaDePagoDetail(): void {
    this.facturaService.getFacturaDetail(this.facturaId)
      .subscribe(selected => {
        this.selected = selected
      });
  }

  /**
  * Lo que realiza cuando se selecciona
  * @param facturaId 
  */
  onSelected(facturaId: number): void {
    this.facturaId = facturaId;
    this.selected = new FacturaDetail(0,0,0,null);
    this.facturaService.getFacturaDetail(facturaId).subscribe(fac => this.selected = fac);

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
  showHideEdit(facturaId: number): void {
    if (!this.showEdit || (this.showEdit && facturaId != this.facturaId)) {
      this.showCreate = false;
      this.showEdit = true;
      this.facturaId = facturaId;
    }
    else {
      this.showEdit = false;
    }
  }

}
