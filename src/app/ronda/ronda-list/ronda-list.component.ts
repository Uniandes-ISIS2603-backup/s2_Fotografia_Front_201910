import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import { RondaService } from '../ronda.service';
import { Ronda } from '../ronda';
import { RondaDetail } from '../ronda-detail';

@Component({
  selector: 'app-ronda',
  templateUrl: './ronda-list.component.html',
  styleUrls: ['./ronda-list.component.css']
})
export class RondaListComponent implements OnInit {

   /**
    * Constructor for the component
    * @param rondaService The ronda's services provider
    */
   constructor(
    private rondaService: RondaService,
) { }

/**
* The list of Rondas which belong to the BookStore
*/
rondas: Ronda[];
ronda_edit_id: number;
selectedRonda : Ronda;

/**
    * Shows or hides the create component
    */
   showCreate: boolean;

   /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;

onSelected(ronda_id: number):void {
    this.ronda_edit_id = ronda_id;
    this.selectedRonda = new RondaDetail();
    this.getRondaDetail();   
}
/**
* Asks the service to update the list of Rondas
*/
getRondas(): void {
    this.rondaService.getRondas()
        .subscribe(rondas => {
            this.rondas = rondas;
        });
}

getRondaDetail(): void {
    this.rondaService.getRondaDetail(this.ronda_edit_id)
        .subscribe(selectedRonda => {
            this.selectedRonda = selectedRonda
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
showHideEdit(ronda_id: number): void {
    if (!this.showEdit || (this.showEdit && ronda_id != this.ronda_edit_id)) {
        this.showCreate = false;
        this.showEdit = true;
        this.ronda_edit_id = ronda_id;
    }
    else {
        this.showEdit = false;
    }
}

updateEditorial(): void {
    this.showEdit = false;
}

/**
* This will initialize the component by retrieving the list of Rondas from the service
* This method will be called when the component is created
*/
ngOnInit() {
    this.getRondas();
}

}
