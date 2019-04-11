import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import { OrganizadorService } from '../organizador.service';
import { Organizador } from '../organizador';
import { OrganizadorDetail } from '../organizador-detail';

@Component({
  selector: 'app-organizador',
  templateUrl: './organizador-list.component.html',
  styleUrls: ['./organizador-list.component.css']
})
export class OrganizadorListComponent implements OnInit {

   /**
    * Constructor for the component
    * @param organizadorService The organizador's services provider
    */
   constructor(
    private organizadorService: OrganizadorService,
) { }

/**
* The list of Organizadors which belong to the BookStore
*/
organizadors: Organizador[];
organizador_edit_id: number;
selectedOrganizador : Organizador;

/**
    * Shows or hides the create component
    */
   showCreate: boolean;

   /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;

onSelected(organizador_id: number):void {
    this.organizador_edit_id = organizador_id;
    this.selectedOrganizador = new OrganizadorDetail();
    this.getOrganizadorDetail();   
}
/**
* Asks the service to update the list of Organizadors
*/
getOrganizadors(): void {
    this.organizadorService.getOrganizadors()
        .subscribe(organizadors => {
            this.organizadors = organizadors;
        });
}

getOrganizadorDetail(): void {
    this.organizadorService.getOrganizadorDetail(this.organizador_edit_id)
        .subscribe(selectedOrganizador => {
            this.selectedOrganizador = selectedOrganizador
        });
}

/**
    * Shows or hides the create component
    */
   showHideCreate(): void {
    this.showEdit = false;
    this.showCreate = !this.showCreate!
}

/**
* Shows or hides the create component
*/
showHideEdit(organizador_id: number): void {
    if (!this.showEdit || (this.showEdit && organizador_id != this.organizador_edit_id)) {
        this.showCreate = false;
        this.showEdit = true;
        this.organizador_edit_id = organizador_id;
    }
    else {
        this.showEdit = false;
    }
}

updateEditorial(): void {
    this.showEdit = false;
}

/**
* This will initialize the component by retrieving the list of Organizadors from the service
* This method will be called when the component is created
*/
ngOnInit() {
    this.getOrganizadors();
}

}
