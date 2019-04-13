import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {RondaService} from '../ronda.service';
import {RondaDetail} from '../ronda-detail';
import {ToastrService} from 'ngx-toastr';
import { RondaCreateComponent } from '../ronda-create/ronda-create.component';
import { Ronda } from '../ronda';


@Component({
    selector: 'app-ronda-edit',
    templateUrl: './ronda-edit.component.html',
    styleUrls: ['./ronda-edit.component.css'],
    providers: [DatePipe]
})
export class RondaEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param rondaService The authors' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private rondaService: RondaService,
        private toastrService: ToastrService,
    ) {}

     /**
    * The id of the editorial that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() ronda_id: number;

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
    @Input() ronda: RondaDetail;

    /**
    * Retrieves the information of the calificacion
    */
   getRonda(): void {
    this.rondaService.getRondaDetail(this.ronda_id)
        .subscribe(ronda => {
            this.ronda = ronda;
        });
}


    /**
    * Updates the information of the author
    */
    editRonda(): void {
        this.rondaService.updateRonda(this.ronda)
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
        this.ronda = new RondaDetail();
        this.getRonda();
    }

    /**
    * This function will be called when the user chooses another author to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
