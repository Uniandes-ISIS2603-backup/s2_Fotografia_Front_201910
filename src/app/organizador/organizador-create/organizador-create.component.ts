import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ToastrService } from 'ngx-toastr';

import { OrganizadorService } from '../organizador.service';

import { Organizador } from '../organizador';

@Component({
    selector: 'app-organizador-create',
    templateUrl: './organizador-create.component.html',
    styleUrls: ['./organizador-create.component.css'],
    providers : [DatePipe]
})
export class OrganizadorCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param organizadorService The organizador's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp : DatePipe,
        private organizadorService: OrganizadorService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new organizador
    */
   organizador: Organizador;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an organizador
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new organizador
    */
    @Output() create = new EventEmitter();

    /**
    * Creates an organizador
    */
    createOrganizador(): Organizador {
        console.log(this.organizador)
        this.organizadorService.createOrganizador(this.organizador)
            .subscribe((organizador) => {
                this.organizador = organizador;
                this.create.emit();
                this.toastrService.success("The organizador was created", "Organizador creation");
                
            });
            return this.organizador;
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.organizador = new Organizador();
    }

}
