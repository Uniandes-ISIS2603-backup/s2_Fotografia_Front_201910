import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {CalificacionService} from '../calificacion.service';
import {Calificacion} from '../calificacion';

@Component({
    selector: 'app-calificacion-create',
    templateUrl: './calificacion-create.component.html',
    styleUrls: ['./calificacion-create.component.css'],
    providers: [DatePipe]
})
export class CalificacionCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param calificacionService The calificacion's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private calificacionService: CalificacionService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new calificacion
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
    * Creates an calificacion
    */
    createCalificacion(): Calificacion {

        this.calificacionService.createCalificacion(this.calificacion)
            .subscribe((calificacion) => {
                this.calificacion = calificacion;
                this.create.emit();
                this.toastrService.success("The calificacion was created", "calificacion creation");

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
    * This function will initialize the component
    */
    ngOnInit() {
        this.calificacion = new Calificacion();
    }

}
