import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InteresFotograficoListComponent } from './interes-fotografico-list/interes-fotografico-list.component';

import { InteresFotograficoService } from './interes-fotografico.service';
import { FormsModule } from '@angular/forms';
import { InteresFotograficoDetailComponent } from './interes-fotografico-detail/interes-fotografico-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InteresFotograficoCreateComponent } from './interes-fotografico-create/interes-fotografico-create.component';
import { InteresFotograficoEditComponent } from './interes-fotografico-edit/interes-fotografico-edit.component';
import { InteresFotograficoFotosComponent } from './interes-fotografico-fotos/interes-fotografico-fotos.component';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    imports: [
        BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            CommonModule,
            FormsModule, 
            NgbModule,
            PhotoModule
      ],
      declarations: [InteresFotograficoListComponent, InteresFotograficoDetailComponent, InteresFotograficoCreateComponent, InteresFotograficoEditComponent, InteresFotograficoFotosComponent],
      providers: [InteresFotograficoService],
      bootstrap: [InteresFotograficoListComponent]
})
export class InteresFotograficoModule { }
