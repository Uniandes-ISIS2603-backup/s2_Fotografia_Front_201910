import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {ClienteService} from '../cliente.service';
import {ClienteDetail} from '../cliente-detail';

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

  @Input() id: number;
    loader: any;

    getClienteDetail(): void {
      console.log(this.id);
    this.clienteService.getClientesDetail(this.id)
      .subscribe(cli => {
        this.clienteDetail = cli
      });
  }

  onLoad(params) {

    this.id = parseInt(params['id']);
    console.log(" en detail " + this.id);
    this.clienteDetail = new ClienteDetail();
    this.getClienteDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}