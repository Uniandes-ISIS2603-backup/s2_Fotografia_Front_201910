import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaListComponent } from './factura-list/factura-list.component';
import { FacturaCreateComponent } from './factura-create/factura-create.component';
import { FacturaDetailComponent } from './factura-detail/factura-detail.component';
import { FacturaEditComponent } from './factura-edit/factura-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FacturaListComponent, FacturaCreateComponent, FacturaDetailComponent, FacturaEditComponent]
})
export class FacturaModule { }
