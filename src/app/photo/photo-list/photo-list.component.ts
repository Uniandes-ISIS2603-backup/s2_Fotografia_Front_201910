import { Component, OnInit } from '@angular/core';
import {Photo} from '../photo';
import  {PhotoService} from '../photo.service';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param photoService The photo's services provider
     */
    constructor(private photoService: PhotoService) {}

    /**
     * The list of photos
     */
    photos: Photo[];

    /**
     * Asks the service to update the list of editorials
     */
    getPhotos(): void {
        this.photoService.getPhotos()
            .subscribe(photos => this.photos = photos);
    }

    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getPhotos();
    }
}
