import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoService } from './photo.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PhotoListComponent, PhotoDetailComponent],
  exports: [PhotoDetailComponent, PhotoListComponent],
  providers: [PhotoService]
})
export class PhotoModule { }
