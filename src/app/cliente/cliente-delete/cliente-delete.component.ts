import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ClienteService } from '../cliente.service';
import {ClienteDetail} from '../cliente-detail';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit 
{
  /**
   * Id del cliente que se desea eliminar
   */
  @Input() clienteDetail: ClienteDetail;

  @Output() eventoEliminar = new EventEmitter();

/**
 * Constructor del componente
 * @param clienteService el proveedor de servicios del cliente
 */
  constructor(private router: Router,
    private clienteService: ClienteService, private toastrService: ToastrService) { }

  ngOnInit() 
  {

  }

  deleteCliente(clienteDetail: ClienteDetail): void {
    console.log(this.clienteDetail);
    this.clienteService.deleteCliente(clienteDetail.id)
        .subscribe(c=>{
          this.eventoEliminar.emit();
          this.router.navigate(['/clientes/list']);  
        });
}

}
