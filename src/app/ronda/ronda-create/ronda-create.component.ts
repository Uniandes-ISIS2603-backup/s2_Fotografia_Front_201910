import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {RondaService} from '../ronda.service';
import {Ronda} from '../ronda';

@Component({
    selector: 'app-ronda-create',
    templateUrl: './ronda-create.component.html',
    styleUrls: ['./ronda-create.component.css'],
    providers: [DatePipe]
})
export class RondaCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param rondaService The ronda's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private rondaService: RondaService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new ronda
    */
   ronda: Ronda;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an ronda
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new ronda
    */
    @Output() create = new EventEmitter();

    /**
    * Creates an ronda
    */
    createRonda(): Ronda {

        this.rondaService.createRonda(this.ronda)
            .subscribe((ronda) => {
                this.ronda = ronda;
                this.create.emit();
                this.toastrService.success("The ronda was created", "Ronda creation");

            });
        return this.ronda;
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
        this.ronda = new Ronda();
    }

}
