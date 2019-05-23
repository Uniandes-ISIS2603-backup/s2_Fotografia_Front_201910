import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {InteresFotograficoService} from '../interes-fotografico.service';
import {InteresFotografico} from '../interes-fotografico';

@Component({
    selector: 'app-interes-fotografico-create',
    templateUrl: './interes-fotografico-create.component.html',
    styleUrls: ['./interes-fotografico-create.component.css'],
    providers: [DatePipe]
})
export class InteresFotograficoCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param fotoService The calificacion's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private interesFotograficoService: InteresFotograficoService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new calificacion
    */
    interesFotografico: InteresFotografico;

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
    createInteresFotografico(): InteresFotografico {

        this.interesFotograficoService.createInteresFotografico(this.interesFotografico)
            .subscribe((interesFotografico) => {
                this.interesFotografico = interesFotografico;
                this.create.emit();
                this.toastrService.success("The interes was created", "interes creation");

            });
        return this.interesFotografico;
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
        this.interesFotografico = new InteresFotografico();
    }

}

