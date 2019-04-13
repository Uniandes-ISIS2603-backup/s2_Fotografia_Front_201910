import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {FotografoService} from '../fotografo.service';
import {FotografoDetail} from '../fotografo-detail';
import {ToastrService} from 'ngx-toastr';
import { FotografoCreateComponent } from '../fotografo-create/fotografo-create.component';
import { Fotografo } from '../fotografo';


@Component({
    selector: 'app-fotografo-edit',
    templateUrl: './fotografo-edit.component.html',
    styleUrls: ['./fotografo-edit.component.css'],
    providers: [DatePipe]
})
export class FotografoEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param authorService The authors' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private fotografoService: FotografoService,
        private toastrService: ToastrService,
    ) {}

     /**
    * The id of the editorial that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() fotografo_id: number;

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
    @Input() fotografo: FotografoDetail;

    /**
    * Retrieves the information of the fotografo
    */
   getFotografo(): void {
    this.fotografoService.getFotografoDetail(this.fotografo_id)
        .subscribe(fotografo => {
            this.fotografo = fotografo;
        });
}


    /**
    * Updates the information of the author
    */
    editFotografo(): void {
        this.fotografoService.updateFotografo(this.fotografo)
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
        this.fotografo = new FotografoDetail();
        this.getFotografo();
    }

    /**
    * This function will be called when the user chooses another author to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
