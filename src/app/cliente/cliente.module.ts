import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { FormsModule } from '@angular/forms';
import { ClienteService } from './cliente.service';
import{AppRoutingModule} from '../app-routing/app-routing.module';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import{FormaDePagoModule} from '../forma-de-pago/forma-de-pago.module';
import { ClienteFormaDePagoComponent } from './cliente-forma-de-pago/cliente-forma-de-pago.component';
import { ClienteDeleteComponent } from './cliente-delete/cliente-delete.component';
import { ClienteFacturaComponent } from './cliente-factura/cliente-factura.component';
import {FacturaModule} from '../factura/factura.module';

@NgModule({
  imports: [
    CommonModule,FormsModule, AppRoutingModule, FormaDePagoModule, NgbModule, FacturaModule
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent, ClienteEditComponent, ClienteFormaDePagoComponent, ClienteDeleteComponent, ClienteFacturaComponent],
  exports: [ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent, ClienteFormaDePagoComponent, ClienteFacturaComponent],
  providers: [ClienteService]
})
export class ClienteModule { }