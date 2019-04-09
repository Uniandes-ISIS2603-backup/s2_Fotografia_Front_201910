import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';


import { PhotoService } from './photo.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoCreateComponent } from './photo-create/photo-create.component';

@NgModule({
  imports: [
    NgxPermissionsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [PhotoListComponent, PhotoDetailComponent, PhotoCreateComponent],
  providers: [PhotoService],
  bootstrap: [PhotoListComponent]
})
export class PhotoModule { }
