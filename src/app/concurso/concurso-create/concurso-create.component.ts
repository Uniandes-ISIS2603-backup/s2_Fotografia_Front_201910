import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Concurso } from '../concurso';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {ConcursoService} from '../concurso.service';



@Component({
  selector: 'app-concurso-create',
  templateUrl: './concurso-create.component.html',
  styleUrls: ['./concurso-create.component.css'],
  providers: [DatePipe]
})
export class ConcursoCreateComponent implements OnInit {

  constructor(
        private dp: DatePipe,
        private concursoService: ConcursoService,
        private toastrService: ToastrService
  ) { }

  @Output() create = new EventEmitter();
    
  @Output() cancel = new EventEmitter();
  
  concurso: Concurso;
  
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
      this.concurso = new Concurso();
  }

}
