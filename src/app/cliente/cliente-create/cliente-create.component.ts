import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit 
{
    /**
     * Constructor del componente
     * @param clienteService El proveedor de servicios del cliente
     * @param toastrService El toastr que muestra los mensajes
     */
  constructor(
        private clienteService: ClienteService, private toastrService: ToastrService
    ) {}

    /**
    * El cliente nuevo
    */
    cliente: Cliente;


    /**
    * El output que le dice al componente padre
    * que ya no se quiere crear un cliente
    */
    @Output() cancel = new EventEmitter();

    /**
    * El output que le dice al usuario que ya se creo un cliente
    */
    @Output() create = new EventEmitter();

    /**
    * Crea un clinente
    */
    createCliente(): Cliente {

        console.log(this.cliente);
        this.clienteService.createCliente(this.cliente)
            .subscribe((cli) => {
                this.cliente = cli;
                this.create.emit();
                this.toastrService.success("The client was created", "cliente creation");
            });

        return this.cliente;
    }

    /**
    * Manda la señal al componente padre de que ya no se quiere crear un cliente
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * Inicializa el componente
    */
    ngOnInit() {
        this.cliente = new Cliente();
    }

}