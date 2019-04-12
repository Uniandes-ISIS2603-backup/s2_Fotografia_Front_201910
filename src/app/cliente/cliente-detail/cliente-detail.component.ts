import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {ClienteService} from '../cliente.service';
import {ClienteDetail} from '../cliente-detail';
import { ClienteListComponent } from '../cliente-list/cliente-list.component';
import { FormaDePago } from '../../forma-de-pago/forma-de-pago';

import{ FormaDePagoListComponent } from '../../forma-de-pago/forma-de-pago-list/forma-de-pago-list.component';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit 
{

constructor(private clienteService: ClienteService,
    private route: ActivatedRoute) { }

  @Input() clienteDetail: ClienteDetail;

/**
* El id del cliente que viene en el path get .../clientes/clienteId
*/
clienteId: number;

public isCollapsed =true;


  /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;

  @Input() id: number;
    loader: any;


@ViewChild (FormaDePagoListComponent)
formaDePagoComponent: FormaDePagoListComponent;



    getClienteDetail(): void {
      console.log(this.id);
    this.clienteService.getClientesDetail(this.id)
      .subscribe(cli => {
        this.clienteDetail = cli
      });
  }

  onLoad(params) {

    this.id = +this.route.snapshot.paramMap.get('id');
    if(this.clienteId){
    console.log(" en detail " + this.id);
    this.clienteDetail = new ClienteDetail();
    this.getClienteDetail();}
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
showHideEdit(clienteId: number): void {
  if (!this.showEdit || (this.showEdit && clienteId != this.clienteId)) {
      this.showEdit = true;
      this.clienteId = clienteId;
  }
  else {
      this.showEdit = false;
  }
}

updateCliente(): void {
  this.showEdit = false;
}

ngOnChanges() {
   this.formaDePagoComponent.isCollapsed  = true;
}

}