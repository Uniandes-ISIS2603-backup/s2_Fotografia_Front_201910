import { NgModule } from '@angular/core';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, DatePipe } from '@angular/common';
import{AppRoutingModule} from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

import { FormaDePagoListComponent } from './forma-de-pago-list/forma-de-pago-list.component';
import { FormaDePagoService } from './forma-de-pago.service';
import { FormaDePagoDetailComponent } from './forma-de-pago-detail/forma-de-pago-detail.component';

import { FormaDePagoCreateComponent } from './forma-de-pago-create/forma-de-pago-create.component';
import { FormaDePagoEditComponent } from './forma-de-pago-edit/forma-de-pago-edit.component';
import { FormaDePagoDeleteComponent } from './forma-de-pago-delete/forma-de-pago-delete.component';


@NgModule({
  imports: [
    CommonModule, FormsModule, AppRoutingModule, NgbModule
  ],
  declarations: [FormaDePagoListComponent, FormaDePagoDetailComponent, FormaDePagoCreateComponent, FormaDePagoEditComponent, FormaDePagoDeleteComponent],
  exports: [FormaDePagoListComponent, FormaDePagoCreateComponent, FormaDePagoDetailComponent],
  providers: [FormaDePagoService, DatePipe]
})
export class FormaDePagoModule {}