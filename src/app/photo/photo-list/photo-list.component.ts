import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';

import { PhotoService } from '../photo.service';
import { Photo } from '../photo';
import { PhotoDetail } from '../photo-detail';

@Component({
    selector: 'app-photo',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param photoService The jurado's services provider
     */
    constructor(
        private photoService: PhotoService,
    ) { }

    /**
    * The list of Jurados which belong to the BookStore
    */
    photos: Photo[];
    photo_edit_id: number;
    selectedPhoto: Photo;

    /**
        * Shows or hides the create component
        */
    showCreate: boolean;

    /**
     * Shows or hides the edit component.
     */
    showEdit: boolean;

    onSelected(photo_id: number): void {
        this.photo_edit_id = photo_id;
        this.selectedPhoto = new PhotoDetail();
        this.getPhotoDetail();
    }
    /**
    * Asks the service to update the list of Jurados
    */
    getPhotos(): void {
        this.photoService.getPhotos()
            .subscribe(photo => {
                this.photos = photo;
            });
    }

    getPhotoDetail(): void {
        this.photoService.getPhotoDetail(this.photo_edit_id)
            .subscribe(selectedPhoto => {
                this.selectedPhoto = selectedPhoto
            });
    }

    /**
        * Shows or hides the create component
        */
    showHideCreate(): void {
        this.showEdit = false;
        this.showCreate = !this.showCreate!
    }

    /**
    * Shows or hides the create component
    */
    showHideEdit(photo_id: number): void {
        if (!this.showEdit || (this.showEdit && photo_id != this.photo_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.photo_edit_id = photo_id;
        }
        else {
            this.showEdit = false;
        }
    }

    updatePhoto(): void {
        console.log('metood update en lista');
        this.showEdit = false;
    }

    /**
    * This will initialize the component by retrieving the list of Jurados from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.getPhotos();
    }
}
