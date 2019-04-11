import { Component, OnInit } from '@angular/core';
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

  formasDePago: FormaDePago[];

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
    this.formaDePagoService.getFormasDePago().subscribe(fdp => this.formasDePago= fdp);
  }

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