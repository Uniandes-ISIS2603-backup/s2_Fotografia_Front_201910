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

  constructor(private formaDePagoService: FormaDePagoService,
    private route: ActivatedRoute) { }

  @Input() formaDePagoDetail: FormaDePagoDetail;

/**
* El id del cliente que viene en el path get .../clientes/clienteId
*/
formaDePagoId: number;


   /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;


  @Input() id: number;
    loader: any;

    getFormaDePagoDetail(): void {
      console.log(this.id);
    this.formaDePagoService.getFormaDePagoDetail(this.id)
      .subscribe(fdp => {
        this.formaDePagoDetail = fdp
      });
  }

  onLoad(params) {
    this.id = +this.route.snapshot.paramMap.get('id');
    if(this.formaDePagoId){
    console.log(" en detail " + this.id);
    this.formaDePagoDetail = new FormaDePagoDetail();
    this.getFormaDePagoDetail();}
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

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
updateFormaDePago(): void {
  this.showEdit = false;
}


}