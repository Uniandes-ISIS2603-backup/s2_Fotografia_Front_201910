import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Calificacion } from '../calificacion';
import { PhotoService } from '../photo.service';
import { Photo } from '../../photo/photo';
import { create } from 'domain';
@Component({
    selector: 'app-photo-add-calificacion',
    templateUrl: './photo-add-calificacion.component.html'
})
export class PhotoAddCalificacionComponent implements OnInit, OnChanges {

    /**
    * The constructor of the component
    * @param photoService The photo service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private photoService: PhotoService,
        private toastrService: ToastrService
    ) { }

    /**
    * The photo's id
    */
    @Input() photo: Photo;

    /**
    * The calificacion to post
    */
    calificacion: Calificacion;
    
    /**
    * The output which tells the parent component
    * that the user no longer wants to create an calificacion
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new calificacion
   */
  @Output() create = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new calificacion
   */
   @Output() updateCalificaciones = new EventEmitter();

   public isCollapsed = false;

    /**
    * This function posts a calificacion
    * @param calificacionForm The form of the calificacion
    */
    postcalificacion(calificacionForm: NgForm): Calificacion {
        this.calificacion.photo = this.photo;
        this.photoService.createCalificacion(this.photo.id,this.calificacion)
            .subscribe(() => {
                calificacionForm.resetForm();
                this.updateCalificaciones.emit();
                this.toastrService.success("The calificacion was successfully created", 'calificacion added');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.calificacion;
    }

     /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
   cancelCreation(): void {
    this.cancel.emit();
}

    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.calificacion = new Calificacion();
    }

    /**
    * The function which notices that the input which defines the photo_id has changed.
    * If the photo has changed, we update the calificacions to show
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}