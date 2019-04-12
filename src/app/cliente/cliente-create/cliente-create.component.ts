import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  constructor(
        private clienteService: ClienteService, private toastrService: ToastrService
    ) {}

    /**
    * The new client
    */
    cliente: Cliente;


    /**
    * The output which tells the parent component
    * that the user no longer wants to create a client
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new cliente
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a client
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
    * Emits the signal to tell the parent component that the
    * user no longer wants to create  cliente
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.cliente = new Cliente();
    }

}