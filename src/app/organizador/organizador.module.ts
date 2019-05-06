import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {OrganizadorService} from './organizador.service';
import {OrganizadorListComponent} from './organizador-list/organizador-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {OrganizadorDetailComponent} from './organizador-detail/organizador-detail.component';
import {OrganizadorCreateComponent} from './organizador-create/organizador-create.component';
import { OrganizadorEditComponent } from './organizador-edit/organizador-edit.component';
import { ConcursoModule } from '../concurso/concurso.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        ConcursoModule
    ],
    declarations: [
        OrganizadorListComponent, OrganizadorDetailComponent, OrganizadorCreateComponent, OrganizadorEditComponent
    ],
    providers: [OrganizadorService]
})
export class OrganizadorModule {}
