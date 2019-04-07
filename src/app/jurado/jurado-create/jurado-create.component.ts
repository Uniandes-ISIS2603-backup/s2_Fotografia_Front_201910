import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {JuradoService} from '../jurado.service';
import {Jurado} from '../jurado';

@Component({
    selector: 'app-jurado-create',
    templateUrl: './jurado-create.component.html',
    styleUrls: ['./jurado-create.component.css'],
    providers: [DatePipe]
})
export class JuradoCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param calificacionService The calificacion's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private juradoService: JuradoService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new calificacion
    */
    jurado: Jurado;

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
    createJurado(): Jurado {

        this.juradoService.createJurado(this.jurado)
            .subscribe((jurado) => {
                this.jurado = jurado;
                this.create.emit();
                this.toastrService.success("The calificacion was created", "calificacion creation");

            });
        return this.jurado;
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
        this.jurado = new Jurado();
    }

}
