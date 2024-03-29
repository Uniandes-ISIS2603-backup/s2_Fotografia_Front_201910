import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

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
  constructor(private router: Router,
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
    @Output() create = new EventEmitter<Cliente>();

    /**
    * Crea un clinente
    */
    createCliente(): Cliente {
        console.log(this.cliente);
        this.clienteService.createCliente(this.cliente)
            .subscribe((cli) => {
                this.cliente = new Cliente(cli.id, cli.login);
                this.create.emit(this.cliente);
                this.router.navigate(['/clientes/{{this.cliente.login}}']);  
                this.toastrService.success("The client was created", "cliente creation");
            });

         localStorage.setItem('cliente', JSON.stringify(this.cliente.login));
         var retrievedObject = localStorage.getItem('cliente');

        console.log('cliente: ', JSON.parse(retrievedObject));
         
         return this.cliente;
    }

    /**
    * Manda la seÃ±al al componente padre de que ya no se quiere crear un cliente
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