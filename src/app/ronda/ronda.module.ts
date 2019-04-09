import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RondaService } from './ronda.service';
import { RondaListComponent } from './ronda-list/ronda-list.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { RondaDetailComponent } from './ronda-detail/ronda-detail.component';
import { RondaCreateComponent } from './ronda-create/ronda-create.component';
import { RondaEditComponent } from './ronda-edit/ronda-edit.component';
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
  declarations: [RondaListComponent, RondaDetailComponent, RondaCreateComponent, RondaEditComponent],
  providers: [RondaService],
  bootstrap: [RondaListComponent]
})
export class RondaModule { }
