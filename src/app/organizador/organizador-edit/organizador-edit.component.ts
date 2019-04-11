import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {OrganizadorService} from '../organizador.service';
import {OrganizadorDetail} from '../organizador-detail';


@Component({
    selector: 'app-organizador-edit',
    templateUrl: './organizador-edit.component.html',
    styleUrls: ['./organizador-edit.component.css']
})
export class OrganizadorEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param organizadorService The Organizador's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private organizadorService: OrganizadorService,
        private toastrService: ToastrService
    ) {}

    /**
    * The id of the Organizador that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() organizador_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an Organizador
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new Organizador
    */
    @Output() update = new EventEmitter();

    /**
    * The Organizador to edit
    */
   organizador: OrganizadorDetail;

    /**
    * Retrieves the information of the Organizador
    */
    getOrganizador(): void {
        this.organizadorService.getOrganizadorDetail(this.organizador_id)
            .subscribe(organizador => {
                this.organizador = organizador;
            });
    }

    /**
    * Updates the Organizador's information
    */
    editOrganizador(): void {
        this.organizadorService.updateOrganizador(this.organizador)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The organizador's information was updated", "Organizador edition");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the Organizador
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.organizador = new OrganizadorDetail();
        this.getOrganizador();
    }

    /**
    * The function which is called every time the user chooses to edit a different Organizador
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}
