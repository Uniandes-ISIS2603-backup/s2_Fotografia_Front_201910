import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcursoListComponent } from './concurso-list/concurso-list.component';
import { ConcursoService } from'./concurso.service';
import { ConcursoDetailComponent } from './concurso-detail/concurso-detail.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConcursoListComponent, ConcursoDetailComponent],
  providers: [ConcursoService],
  exports: [ConcursoListComponent, ConcursoDetailComponent]
})
export class ConcursoModule { }
