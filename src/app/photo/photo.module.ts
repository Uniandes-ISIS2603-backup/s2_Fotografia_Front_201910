import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PhotoListComponent, PhotoDetailComponent]
})
export class PhotoModule { }
