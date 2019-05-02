import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Concurso } from '../concurso';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {ConcursoService} from '../concurso.service';

import {OrganizadorService} from '../../organizador/organizador.service';
import {Organizador} from '../../organizador/organizador';

@Component({
  selector: 'app-concurso-create',
  templateUrl: './concurso-create.component.html',
  styleUrls: ['./concurso-create.component.css'],
  providers: [DatePipe]
})
export class ConcursoCreateComponent implements OnInit {

  constructor(
        private dp: DatePipe,
        private organizadorService: OrganizadorService,
        private concursoService: ConcursoService,
        private toastrService: ToastrService
  ) { }

  @Output() create = new EventEmitter();
    
  @Output() cancel = new EventEmitter();
  
  concurso: Concurso;

  organizadors: Organizador[];
  
  getOrganizadors(): void {
    this.organizadorService.getOrganizadors()
        .subscribe(organizadors => {
            this.organizadors = organizadors;
        }, err => {
            this.toastrService.error(err, 'Error');
        });
}

  createConcurso(): Concurso{
        this.concursoService.createConcurso(this.concurso).subscribe(concurso => {
            this.concurso = concurso;
            this.create.emit("WOOOOOOOOOOOOOOO");
            this.toastrService.success("El concurso se creo", "Creacion del Concurso");
        });
        return this.concurso;
  }
  
  cancelCreation(): void {
        this.cancel.emit();
    }

  ngOnInit() {
      this.concurso = new Concurso();}
      
  }

}
