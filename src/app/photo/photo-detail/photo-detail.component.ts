
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


import { PhotoService } from '../photo.service';
import { Photo } from '../photo';
import { PhotoDetail } from '../photo-detail';
import { PhotoCalificacionComponent } from '../photo-calificacion/photo-calificacion.component';
import {PhotoAddCalificacionComponent} from '../photo-add-calificacion/photo-add-calificacion.component';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit, OnDestroy {

    /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;

  /**
    * The constructor of the component
    * @param photoService The photo service which communicates with the API
    * @param route The route which helps to retrieves the id of the photo to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute,
    private router: Router
) {
    //This is added so we can refresh the view when one of the photos in
    //the "Other photos" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
        if (e instanceof NavigationEnd) {
            this.ngOnInit();
        }
    });
}

/**
* The photo's id retrieved from the path
*/
id: number;

/**
* The photo whose details are shown
*/
photoDetail: PhotoDetail;

/**
* The other photo's shown in the sidebar
*/
other_photos: Photo[];

/**
* The suscription which helps to know when a new photo
* needs to be loaded
*/
navigationSubscription;

calificacion_edit_id: number;

/**
    * Shows or hides the create component
    */
   showCreate: boolean;

/**
     * The child PhotoCalificacionListComponent
     */
    @ViewChild(PhotoCalificacionComponent) calificacionListComponent:PhotoCalificacionComponent;

    /**
     * The child PhotoCalificacionListComponent
     */
   @ViewChild(PhotoAddCalificacionComponent) calificacionAddComponent: PhotoAddCalificacionComponent;

/**
* The method which retrieves the details of the photo that

* we want to show
*/
getPhotoDetail(): void {
     this.photoService.getPhotoDetail(this.id)
        .subscribe(photoDetail => {
            this.photoDetail = photoDetail;
        });
}

/**
* This method retrieves all the photos in the galery to show them in the list
*/
getOtherPhotos(): void {
    this.photoService.getPhotos()
        .subscribe(photos => {
            this.other_photos = photos;
            this.other_photos = this.other_photos.filter(photo => photo.id !== this.id);
        });
}

/**
     * The function called when a calificacion is posted, so that the child component can refresh the list
     */
    updateCalificaciones(): void {
        this.getPhotoDetail();
        this.calificacionListComponent.updateCalificaciones(this.photoDetail.calificaciones);
        this.calificacionListComponent.isCollapsed = false;
        this.calificacionAddComponent.isCollapsed = true;
    }

    /**
    * Shows or hides the create component
    */
   showHideCreate(): void {
    this.showCreate = !this.showCreate!
}

/**
* The method which initilizes the component
* We need to initialize the photo and its editorial so that
* they are never considered undefined
*/
ngOnInit() {
    this.showCreate =false;
    this.id= + this.route.snapshot.paramMap.get('id');
    this.photoDetail = new PhotoDetail();
    this.getPhotoDetail();
    this.getOtherPhotos();
}

/**
* This method helps to refresh the view when we need to load another photo into it
* when one of the other photos in the list is clicked
*/
ngOnDestroy() {
    if (this.navigationSubscription) {
        this.navigationSubscription.unsubscribe();
    }
}

}
