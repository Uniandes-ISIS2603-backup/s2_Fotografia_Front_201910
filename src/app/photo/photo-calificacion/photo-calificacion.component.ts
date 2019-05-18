import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Calificacion } from '../calificacion';
import { PhotoService } from '../photo.service';
import { ToastrService } from 'ngx-toastr';
import { Photo } from '../photo';

@Component({
    selector: 'app-photo-calificaciones',
    templateUrl: './photo-calificacion.component.html',
})
export class PhotoCalificacionComponent implements OnInit {

      /**
    * The constructor of the component
    * @param photoService The photo service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private photoService: PhotoService,
    private toastrService: ToastrService
) { }

    @Input() photoCalificaciones : Calificacion [];
    
    public isCollapsed = false;


    /**
     * The function called when a Calificacion is posted to update the Calificacions
     */
    updateCalificaciones(calificaciones: Calificacion[]): void {
       this.photoCalificaciones = calificaciones;
    }
    
    ngOnInit(){
    }
}
