import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcursoListComponent } from './concurso-list/concurso-list.component';
import { ConcursoService } from'./concurso.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ConcursoDetailComponent } from './concurso-detail/concurso-detail.component';
import { ConcursoCreateComponent } from './concurso-create/concurso-create.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPermissionsModule,
    FormsModule,
    NgbModule
  ],
  declarations: [ConcursoListComponent, ConcursoDetailComponent, ConcursoCreateComponent],
  providers: [ConcursoService],
  exports: [ConcursoListComponent, ConcursoDetailComponent, ConcursoCreateComponent]
})
export class ConcursoModule { }
