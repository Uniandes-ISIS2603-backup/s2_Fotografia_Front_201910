import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PhotoService } from './photo.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [PhotoListComponent, PhotoDetailComponent],
  providers: [PhotoService],
  bootstrap: [PhotoListComponent]
})
export class PhotoModule { }
