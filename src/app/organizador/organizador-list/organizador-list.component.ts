import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

import { OrganizadorService } from '../organizador.service';
import { Organizador } from '../organizador';
import { OrganizadorDetail } from '../organizador-detail';

/**
* The organizador's list component
*/
@Component({
    selector: 'app-organizador',
    templateUrl: './organizador-list.component.html',
    styleUrls: ['./organizador-list.component.css']
})
export class OrganizadorListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param organizadorService The organizador's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private organizadorService: OrganizadorService) { }

    /**
    * The list of organizadors which belong to the Fotografia
    */
   organizadors: Organizador[];

    /**
    * Shows or hides the organizador-create-component
    */
    showCreate: boolean;
    
    /**
    * The id of the organizador that the user wants to view
    */
    organizador_id: number;
    
    /**
     * the organizador that the user views.
     */
    selectedOrganizador : Organizador;
    
    
    /**
    * Shows the organizador
    */
    onSelected(organizador_id: number):void {
        this.showCreate = false;
        this.organizador_id = organizador_id;
        this.selectedOrganizador = new OrganizadorDetail();
        this.getOrganizadorDetail();
    }
    
    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        if (this.selectedOrganizador) {
            this.selectedOrganizador = undefined;
            this.organizador_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    
    /**
    * Asks the service to update the list of organizadors
    */
    getOrganizadors(): void {
        this.organizadorService.getOrganizadors()
            .subscribe(organizadors => {
                this.organizadors = organizadors;
            });
    }

    getOrganizadorDetail(): void {
        this.organizadorService.getOrganizadorDetail(this.organizador_id)
            .subscribe(selectedOrganizador => {
                this.selectedOrganizador = selectedOrganizador
            });
    }
    /**
    * This will initialize the component by retrieving the list of organizadors from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.selectedOrganizador = undefined;
        this.organizador_id = undefined;
        this.getOrganizadors();
    }
}