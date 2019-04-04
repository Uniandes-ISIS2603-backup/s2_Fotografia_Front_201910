import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { OrganizadorService } from './organizador.service';
import { OrganizadorListComponent } from './organizador-list/organizador-list.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { OrganizadorDetailComponent } from './organizador-detail/organizador-detail.component';

//import { BookModule } from '../book/book.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
       // BookModule
    ],
    declarations: [
        OrganizadorListComponent, OrganizadorDetailComponent
    ],
    providers: [OrganizadorService],
    bootstrap: [OrganizadorListComponent]
})
export class OrganizadorModule { }
