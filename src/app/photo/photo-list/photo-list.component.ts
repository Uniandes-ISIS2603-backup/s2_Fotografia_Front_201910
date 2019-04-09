import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import {Photo} from '../photo';
import  {PhotoService} from '../photo.service';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

    /**
    * The list of photos to display
    */
   @Input() photos: Photo[];

   /**
   * The component's constructor
   */
   constructor(private photoService: PhotoService,  private route: ActivatedRoute) {  }
   
   allphotos:string = 'yes';
   /**
   * This method retrieves all the books in the Bookstore to show them in the list
   */
   getPhotos(): void {
       this.photoService.getPhotos()
           .subscribe(photos => {
               this.photos = photos;
           });
   }

   /**
   * The method which initializes the component
   */
   ngOnInit() {
    this.route.queryParams
     .filter(params => params.allphotos)
     .subscribe(params => {
       console.log(params); 

       this.allphotos = params.allphotos;
       console.log(this.allphotos); 
     });
     if (this.allphotos == 'yes'){
         console.log("allphotos");
     
      this.getPhotos();
      }
   }
}
