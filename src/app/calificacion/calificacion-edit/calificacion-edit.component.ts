import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {CalificacionService} from '../calificacion.service';
import {CalificacionDetail} from '../calificacion-detail';
import {ToastrService} from 'ngx-toastr';
import { CalificacionCreateComponent } from '../calificacion-create/calificacion-create.component';
import { Calificacion } from '../../photo/calificacion';


@Component({
    selector: 'app-calificacion-edit',
    templateUrl: './calificacion-edit.component.html',
    styleUrls: ['./calificacion-edit.component.css'],
    providers: [DatePipe]
})
export class CalificacionEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param authorService The authors' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private calificacionService: CalificacionService,
        private toastrService: ToastrService,
    ) {}

     /**
    * The id of the editorial that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() calificacion_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an editorial
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user updated a new editorial
   */
   @Output() update = new EventEmitter();

    /**
    * The author id as received from the parent component
    */
    @Input() calificacion: CalificacionDetail;

    /**
    * Retrieves the information of the calificacion
    */
   getCalificacion(): void {
    this.calificacionService.getCalificacionDetail(this.calificacion_id)
        .subscribe(calificacion => {
            this.calificacion = calificacion;
        });
}


    /**
    * Updates the information of the author
    */
    editCalificacion(): void {
        this.calificacionService.updateCalificacion(this.calificacion)
            .subscribe(() => {
                this.toastrService.success("The author's information was updated", "Author edition");
            });
        this.update.emit();
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelEdition(): void {
        this.cancel.emit();
    }


    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.calificacion = new CalificacionDetail();
        this.getCalificacion();
    }

    /**
    * This function will be called when the user chooses another author to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
