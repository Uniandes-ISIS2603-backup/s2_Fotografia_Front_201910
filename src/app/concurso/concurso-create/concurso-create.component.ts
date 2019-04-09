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
        let date: Date = new Date(this.concurso.fechaDelConcurso.year, this.concurso.fechaDelConcurso.month - 1,
        this.concurso.fechaDelConcurso.day);
        
        this.concurso.fechaDelConcurso = this.dp.transform(date, 'yyy-MM-dd');
        this.concursoService.createConcurso(this.concurso).subscribe(concurso => {
            this.concurso = concurso;
            this.create.emit();
            this.toastrService.success("El concurso se creo", "Creacion del Concurso");
            console.log("FF");
        });
        return this.concurso;
  }
  
  
  ngOnInit() {
      this.concurso = new Concurso();
  }

}
