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
import { PhotoEditComponent } from './photo-edit/photo-edit.component';
import { PhotoCalificacionComponent} from './photo-calificacion/photo-calificacion.component';
import {PhotoAddCalificacionComponent} from './photo-add-calificacion/photo-add-calificacion.component';
import {ShoppingCartComponent} from '../shopping-cart/shopping-cart.component';


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
  declarations: [ShoppingCartComponent, PhotoListComponent, PhotoDetailComponent, PhotoCreateComponent, PhotoEditComponent, PhotoCalificacionComponent, PhotoAddCalificacionComponent],
  providers: [PhotoService],
  bootstrap: [PhotoListComponent],
  exports:[PhotoCreateComponent]
})
export class PhotoModule { }
