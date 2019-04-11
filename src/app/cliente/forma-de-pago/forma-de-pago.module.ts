import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormaDePagoListComponent } from './forma-de-pago-list/forma-de-pago-list.component';
import { FormaDePagoService } from './forma-de-pago.service';
import { FormaDePagoDetailComponent } from './forma-de-pago-detail/forma-de-pago-detail.component';

import { FormaDePagoCreateComponent } from './forma-de-pago-create/forma-de-pago-create.component';
import { FormaDePagoEditComponent } from './forma-de-pago-edit/forma-de-pago-edit.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormaDePagoListComponent, FormaDePagoDetailComponent, FormaDePagoCreateComponent, FormaDePagoEditComponent],
  exports: [FormaDePagoListComponent, FormaDePagoCreateComponent],
  providers: [FormaDePagoService]
})
export class FormaDePagoModule {}