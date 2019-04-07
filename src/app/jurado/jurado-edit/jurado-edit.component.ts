import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {JuradoService} from '../jurado.service';
import {JuradoDetail} from '../jurado-detail';
import {ToastrService} from 'ngx-toastr';
import { JuradoCreateComponent } from '../jurado-create/jurado-create.component';
import { Jurado } from '../jurado';


@Component({
    selector: 'app-jurado-edit',
    templateUrl: './jurado-edit.component.html',
    styleUrls: ['./jurado-edit.component.css'],
    providers: [DatePipe]
})
export class JuradoEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param authorService The authors' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private juradoService: JuradoService,
        private toastrService: ToastrService,
    ) {}

     /**
    * The id of the editorial that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() jurado_id: number;

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
    @Input() jurado: JuradoDetail;

    /**
    * Retrieves the information of the calificacion
    */
   getJurado(): void {
    this.juradoService.getJuradoDetail(this.jurado_id)
        .subscribe(jurado => {
            this.jurado = jurado;
        });
}


    /**
    * Updates the information of the author
    */
    editJurado(): void {
        this.juradoService.updateJurado(this.jurado)
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
        this.jurado = new JuradoDetail();
        this.getJurado();
    }

    /**
    * This function will be called when the user chooses another author to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
