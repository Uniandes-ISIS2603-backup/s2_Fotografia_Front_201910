import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {PhotoService} from '../photo.service';
import {PhotoDetail} from '../photo-detail';
import {ToastrService} from 'ngx-toastr';
import { PhotoCreateComponent } from '../photo-create/photo-create.component';
import { Photo } from '../photo';


@Component({
    selector: 'app-photo-edit',
    templateUrl: './photo-edit.component.html',
    styleUrls: ['./photo-edit.component.css'],
    providers: [DatePipe]
})
export class PhotoEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param photoService The authors' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private photoService: PhotoService,
        private toastrService: ToastrService,
    ) {}

     /**
    * The id of the photo that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() photo_edit: number;

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
    * The photo as received from the parent component
    */
    @Input() photo: PhotoDetail;

    /**
    * Retrieves the information of the calificacion
    */
   getPhoto(): void {
    this.photoService.getPhotoDetail(this.photo_edit)
        .subscribe(photo => {
            this.photo = photo;
        });
}


    /**
    * Updates the information of the author
    */
    editPhoto(): void {
        this.photoService.updatePhoto(this.photo)
            .subscribe(() => {
                this.toastrService.success("The photo's information was updated", "Photo edition");
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
        this.photo = new PhotoDetail();
        this.getPhoto();
    }

    /**
    * This function will be called when the user chooses another author to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
