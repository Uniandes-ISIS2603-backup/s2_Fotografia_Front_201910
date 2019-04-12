import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {InteresFotograficoService} from '../interes-fotografico.service';
import {InteresFotograficoDetail} from '../interes-fotografico-detail';
import {ToastrService} from 'ngx-toastr';
import { InteresFotograficoCreateComponent } from '../interes-fotografico-create/interes-fotografico-create.component';
import { InteresFotografico } from '../interes-fotografico';


@Component({
    selector: 'app-interes-fotografico-edit',
    templateUrl: './interes-fotografico-edit.component.html',
    styleUrls: ['./interes-fotografico-edit.component.css'],
    providers: [DatePipe]
})
export class InteresFotograficoEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param authorService The authors' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private interesFotograficoService: InteresFotograficoService,
        private toastrService: ToastrService,
    ) {}

     /**
    * The id of the editorial that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() interesFotografico_id: number;

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
    @Input() interesFotografico: InteresFotograficoDetail;

    /**
    * Retrieves the information of the interesFotografico
    */
   getInteresFotografico(): void {
    this.interesFotograficoService.getInteresFotograficoDetail(this.interesFotografico_id)
        .subscribe(interesFotografico => {
            this.interesFotografico = interesFotografico;
        });
}


    /**
    * Updates the information of the author
    */
    editInteresFotografico(): void {
        this.interesFotograficoService.updateInteresFotografico(this.interesFotografico)
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
        this.interesFotografico = new InteresFotograficoDetail();
        this.getInteresFotografico();
    }

    /**
    * This function will be called when the user chooses another author to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}

