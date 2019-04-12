import { Component, OnInit, Input } from '@angular/core';
import {FormaDePago} from '../forma-de-pago';
import {FormaDePagoService} from '../forma-de-pago.service';
import {FormaDePagoDetail} from '../forma-de-pago-detail';

@Component({
  selector: 'app-forma-de-pago-list',
  templateUrl: './forma-de-pago-list.component.html',
  styleUrls: ['./forma-de-pago-list.component.css']
})
export class FormaDePagoListComponent implements OnInit {

  /**
   *  COnstructor del componente
   * @param formaDePagoService el proveedor de servicios de la forma de pago
   */
  constructor(private formaDePagoService: FormaDePagoService) { }

  /**
   * Las formas de pago
   */
  @Input() formasDePago: FormaDePago[];

  selected : FormaDePago;
  formaDePagoId: number;

  /**
    * Shows or hides the create component
    */
   showCreate: boolean;

   /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;

   isCollapsed: boolean;


   /**
    * Trae todas las formas de pago
    */
  getFormasDePago():void
  {
    this.formaDePagoService.getFormasDePago().subscribe(fdp => 
      this.formasDePago= fdp);
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
onSelected(formaDePagoId: number):void {
    this.formaDePagoId = formaDePagoId;
    this.selected = new FormaDePagoDetail();
    this.formaDePagoService.getFormaDePagoDetail(formaDePagoId).subscribe(fdp=> this.selected=fdp);
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

/**
 * Inicializa el componente
 */
   ngOnInit() {
    this.getFormasDePago();
  }

}