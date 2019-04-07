import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import { CalificacionService } from '../calificacion.service';
import { Calificacion } from '../calificacion';
import { CalificacionDetail } from '../calificacion-detail';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion-list.component.html',
  styleUrls: ['./calificacion-list.component.css']
})
export class CalificacionListComponent implements OnInit {

   /**
    * Constructor for the component
    * @param calificacionService The calificacion's services provider
    */
   constructor(
    private calificacionService: CalificacionService,
) { }

/**
* The list of calificacions which belong to the BookStore
*/
calificaciones: Calificacion[];
calificacion_edit_id: number;
selectedCalificacion : Calificacion;
/**
    * Shows or hides the create component
    */
   showCreate: boolean;

   /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;

onSelected(calificacion_id: number):void {
    this.calificacion_edit_id = calificacion_id;
    this.selectedCalificacion = new CalificacionDetail();
    this.getCalificacionDetail();   
}
/**
* Asks the service to update the list of calificacions
*/
getCalificaciones(): void {
    this.calificacionService.getCalificaciones()
        .subscribe(calificacions => {
            this.calificaciones = calificacions;
        });
}

getCalificacionDetail(): void {
    this.calificacionService.getCalificacionDetail(this.calificacion_edit_id)
        .subscribe(selectedCalificacion => {
            this.selectedCalificacion = selectedCalificacion
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
   showHideEdit(calificacion_id: number): void {
    if (!this.showEdit || (this.showEdit && calificacion_id != this.calificacion_edit_id)) {
        this.showCreate = false;
        this.showEdit = true;
        this.calificacion_edit_id = calificacion_id;
    }
    else {
        this.showEdit = false;
    }
}

updateCalificacion(): void {
    this.showEdit = false;
}

/**
* This will initialize the component by retrieving the list of calificacions from the service
* This method will be called when the component is created
*/
ngOnInit() {
    this.showCreate=false;
    this.showEdit = false;
    this.getCalificaciones();
}

}
