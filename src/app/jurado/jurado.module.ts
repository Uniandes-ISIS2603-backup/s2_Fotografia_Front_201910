import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { JuradoService } from './jurado.service';
import { JuradoListComponent } from './jurado-list/jurado-list.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { JuradoDetailComponent } from './jurado-detail/jurado-detail.component';
import { JuradoCreateComponent } from './jurado-create/jurado-create.component';
import { JuradoEditComponent } from './jurado-edit/jurado-edit.component';
import { JuradoConcursoComponent} from './jurado-concurso/jurado-concurso.component';
import { ConcursoModule} from '../concurso/concurso.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
  declarations: [JuradoListComponent, JuradoDetailComponent, JuradoCreateComponent, JuradoEditComponent, JuradoConcursoComponent],
  providers: [JuradoService],
  exports: [JuradoCreateComponent],
  bootstrap: [JuradoListComponent]
})
export class JuradoModule { }
