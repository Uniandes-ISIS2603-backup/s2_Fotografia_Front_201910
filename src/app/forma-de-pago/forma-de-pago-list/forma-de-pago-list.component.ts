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

  constructor(private formaDePagoService: FormaDePagoService) { }

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



  getFormasDePago():void
  {
    this.formaDePagoService.getFormasDePago().subscribe(fdp => 
      this.formasDePago= fdp);
  }
  

  /*
  getFormasDePago():void
  {
    this.formaDePagoService.getFormasDePago().subscribe(fdp => 
      {
        for (let formaDePago of fdp)
        {
          var tipoTarjeta: string = formaDePago.tipoDeTarjeta;

          if(tipoTarjeta === "Tarjeta Debito")
          {
            formaDePago.imagen = "data:image/png;base64,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";
          }
          else
          {
            var tipoTarjetaCredito: string = formaDePago.tipoTarjetaDeCredito;

            if (tipoTarjetaCredito === "MASTERCARD")
            {
              formaDePago.imagen = "http://pngimg.com/uploads/mastercard/mastercard_PNG23.png";
            }

            else
            {
              formaDePago.imagen = "https://i0.wp.com/png.icons8.com/color/1600/visa?w=600";
            }

          }
        }

      
      
      
      
      this.formasDePago= fdp;
      });
    }

    */

    getFormaDePagoDetail(): void {
    this.formaDePagoService.getFormaDePagoDetail(this.formaDePagoId)
        .subscribe(selected => {
            this.selected = selected
        });
}

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

   ngOnInit() {
    this.getFormasDePago();
  }

}