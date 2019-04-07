import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CalificacionService } from './calificacion.service';
import { CalificacionListComponent } from './calificacion-list/calificacion-list.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CalificacionDetailComponent } from './calificacion-detail/calificacion-detail.component';
import { CalificacionCreateComponent } from './calificacion-create/calificacion-create.component';
import { CalificacionEditComponent } from './calificacion-edit/calificacion-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule, 
        NgbModule
  ],
  declarations: [CalificacionListComponent, CalificacionDetailComponent, CalificacionCreateComponent, CalificacionEditComponent],
  providers: [CalificacionService],
  bootstrap: [CalificacionListComponent]
})
export class CalificacionModule { }
