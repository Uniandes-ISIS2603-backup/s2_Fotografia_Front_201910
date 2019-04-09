import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import { JuradoService } from '../jurado.service';
import { Jurado } from '../jurado';
import { JuradoDetail } from '../jurado-detail';

@Component({
  selector: 'app-jurado',
  templateUrl: './jurado-list.component.html',
  styleUrls: ['./jurado-list.component.css']
})
export class JuradoListComponent implements OnInit {

   /**
    * Constructor for the component
    * @param juradoService The jurado's services provider
    */
   constructor(
    private juradoService: JuradoService,
) { }

/**
* The list of Jurados which belong to the BookStore
*/
jurados: Jurado[];
jurado_edit_id: number;
selectedJurado : Jurado;

/**
    * Shows or hides the create component
    */
   showCreate: boolean;

   /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;

onSelected(jurado_id: number):void {
    this.jurado_edit_id = jurado_id;
    this.selectedJurado = new JuradoDetail();
    this.getJuradoDetail();   
}
/**
* Asks the service to update the list of Jurados
*/
getJurados(): void {
    this.juradoService.getJurados()
        .subscribe(jurados => {
            this.jurados = jurados;
        });
}

getJuradoDetail(): void {
    this.juradoService.getJuradoDetail(this.jurado_edit_id)
        .subscribe(selectedJurado => {
            this.selectedJurado = selectedJurado
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
showHideEdit(jurado_id: number): void {
    if (!this.showEdit || (this.showEdit && jurado_id != this.jurado_edit_id)) {
        this.showCreate = false;
        this.showEdit = true;
        this.jurado_edit_id = jurado_id;
    }
    else {
        this.showEdit = false;
    }
}

updateEditorial(): void {
    this.showEdit = false;
}

/**
* This will initialize the component by retrieving the list of Jurados from the service
* This method will be called when the component is created
*/
ngOnInit() {
    this.getJurados();
}

}
