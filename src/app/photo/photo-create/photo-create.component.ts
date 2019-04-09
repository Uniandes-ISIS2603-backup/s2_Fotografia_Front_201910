import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {PhotoService} from '../photo.service';
import {Photo} from '../photo';

@Component({
    selector: 'app-photo-create',
    templateUrl: './photo-create.component.html',
    styleUrls: ['./photo-create.component.css'],
    providers: [DatePipe]
})
export class PhotoCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param photoService The photo's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private photoService: PhotoService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new photo
    */
    photo: Photo;

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
    createPhoto(): Photo {

        this.photoService.createPhoto(this.photo)
            .subscribe((photo) => {
                this.photo = photo;
                this.create.emit();
                this.toastrService.success("The photo was created", "photo creation");

            });
        return this.photo;
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
        this.photo = new Photo();
    }

}
