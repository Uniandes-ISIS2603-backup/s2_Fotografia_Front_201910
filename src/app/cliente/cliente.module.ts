import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { FormsModule } from '@angular/forms';
import { ClienteService } from './cliente.service';
import{AppRoutingModule} from '../app-routing/app-routing.module';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';


@NgModule({
  imports: [
    CommonModule,FormsModule, AppRoutingModule
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent],
  exports: [ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent],
  providers: [ClienteService]
})
export class ClienteModule { }