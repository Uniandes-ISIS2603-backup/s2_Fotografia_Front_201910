import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {FormaDePagoService} from '../forma-de-pago.service';
import {FormaDePagoDetail} from '../forma-de-pago-detail';

@Component({
  selector: 'app-forma-de-pago-detail',
  templateUrl: './forma-de-pago-detail.component.html',
  styleUrls: ['./forma-de-pago-detail.component.css']
})
export class FormaDePagoDetailComponent implements OnInit {

  /**
   * Constructor del componente
   * @param formaDePagoService el proveedor de servicios
   * @param route la ruta que permite conseguir el id
   */
  constructor(private formaDePagoService: FormaDePagoService,
    private route: ActivatedRoute) { }

    /**
     * El detail de la forma de pago seleccionada en la lista
     */
  @Input() formaDePagoDetail: FormaDePagoDetail;


  /**
   * Id del cliente del cual se busca el detail. Llega de cliente-forma-de-pago
   */
  @Input() clienteId: number;

/**
* El id de la forma de pago que viene en el path get .../clientes/clienteId
*/
formaDePagoId: number;


   /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;

    loader: any;

    /**
     * Consigue el detalle de una forma de pago
     */
    getFormaDePagoDetail(): void {
      console.log(this.formaDePagoId);
    this.formaDePagoService.getFormaDePagoDetail(this.formaDePagoId)
      .subscribe(fdp => {
        this.formaDePagoDetail = fdp
      });
  }

  /**
   * Lo que hace cuando se carga el componente
   * @param params 
   */
  onLoad(params) {
    this.formaDePagoId = +this.route.snapshot.paramMap.get('id');
    if(this.formaDePagoId){
    console.log(" en detail " + this.formaDePagoId);
    this.formaDePagoDetail = new FormaDePagoDetail();
    this.getFormaDePagoDetail();}
  }

  /**
   * Inicializa el componente
   */
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  /**
   * Para la subscripcion
   */
  ngOnDestroy() {
    this.loader.unsubscribe();
  }

  /**
* Shows or hides the create component
*/
showHideEdit(formaDePagoId: number): void {
    if (!this.showEdit || (this.showEdit && formaDePagoId != this.formaDePagoId)) {
        this.showEdit = true;
        this.formaDePagoId = formaDePagoId;
    }
    else {
        this.showEdit = false;
    }
}

/**
 * Actualiza la forma de pago
 */
updateFormaDePago(): void {
  this.showEdit = false;
}


}