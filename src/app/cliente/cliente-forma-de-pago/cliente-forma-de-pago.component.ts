import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { FormaDePagoDetail } from '../../forma-de-pago/forma-de-pago-detail';
import { FormaDePago } from '../../forma-de-pago/forma-de-pago';
import { FormaDePagoService } from '../../forma-de-pago/forma-de-pago.service';

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
  constructor(private clienteService: ClienteService, private formaDePagoService: FormaDePagoService) { }

  /**
   * Id del cliente
   */
  @Input() clienteId: number;
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
  formasDePago: FormaDePago[];
  selected: FormaDePago;
  formaDePagoId: number;



  /**
   * Trae las formas de pago del cliente
   * @param clienteId el cliente del que se quieren traer las formas de pago
   */
  getFormasDePago(clienteId: number): void {
    console.log("getFormasDePago" + clienteId);
    this.clienteService.getClienteFormasDePago(clienteId)
      .subscribe(fdp => {
        for (let fp of fdp) {

          console.log(fp.fechaVencimiento);
          var fecha: Date = new Date(fp.fechaVencimiento);
          var mes: any = fecha.getMonth() + 1;
          var anio: any = fecha.getFullYear();
          fp.fechaFormato = mes + "/" + anio;
         
          
          var tipoTarjeta: string = fp.tipoDeTarjeta;
          

          if (fp.tipoDeTarjeta === "Tarjeta Debito") {
            console.log("Tipo de la tarjeta" + fp.tipoDeTarjeta);
            fp.foto = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Maestro_1992_logo.svg/2000px-Maestro_1992_logo.svg.png';
          }
          else {

            var tipoTarjetaCredito: string = fp.tipoTarjetaDeCredito;


            if (fp.tipoTarjetaDeCredito === "VISA") {
              console.log(fp.tipoDeTarjeta);
              fp.foto = 'https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png';
            }

            else {
              console.log(fp.tipoDeTarjeta);
              fp.foto = 'http://www.sclance.com/pngs/mastercard-logo-png/mastercard_logo_png_852039.png';
            }
          }
        }
        console.log("Tamaño" + fdp.length);
        this.formasDePago = fdp
      });
    console.log(this.formasDePago.length);
  }

  /**
   * Trae las formas de pago
   */
  getClienteFormasDePago(): void {
    console.log("getClienteFormasDePago :" + this.clienteId);
    this.getFormasDePago(this.clienteId);
    this.toggleformasDePago();
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
    this.isCollapsed = true;
  }

  /**
   * Devuelve la forma de pago en detalle
   */
  getFormaDePagoDetail(): void {
    this.formaDePagoService.getFormaDePagoDetail(this.formaDePagoId)
      .subscribe(selected => {
        this.selected = selected
      });
  }

  /**
  * Lo que realiza cuando se selecciona
  * @param formaDePagoId 
  */
  onSelected(formaDePagoId: number): void {
    this.formaDePagoId = formaDePagoId;
    this.selected = new FormaDePagoDetail();
    this.formaDePagoService.getFormaDePagoDetail(formaDePagoId).subscribe(fdp => this.selected = fdp);

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
  showHideEdit(formaDePagoId: number): void {
    if (!this.showEdit || (this.showEdit && formaDePagoId != this.formaDePagoId)) {
      this.showCreate = false;
      this.showEdit = true;
      this.formaDePagoId = formaDePagoId;
    }
    else {
      this.showEdit = false;
    }
  }

}
