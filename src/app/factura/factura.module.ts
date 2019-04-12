import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';

import { FacturaService } from './factura.service';
import { FacturaListComponent } from './factura-list/factura-list.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FacturaDetailComponent } from './factura-detail/factura-detail.component';
import { FacturaCreateComponent } from './factura-create/factura-create.component';
import { FacturaEditComponent } from './factura-edit/factura-edit.component';

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
  declarations: [FacturaListComponent, FacturaDetailComponent, FacturaCreateComponent, FacturaEditComponent],
  providers: [FacturaService],
  bootstrap: [FacturaListComponent]
})
export class FacturaModule { }
