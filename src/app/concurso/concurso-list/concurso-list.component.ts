import { Component, OnInit } from '@angular/core';
import {Concurso} from '../concurso';
import { Router } from '@angular/router';
import {ConcursoService} from '../concurso.service'

@Component({
  selector: 'app-concurso-list',
  templateUrl: './concurso-list.component.html',
  styleUrls: ['./concurso-list.component.css']
})
export class ConcursoListComponent implements OnInit {

  constructor(private concursoService: ConcursoService, private router: Router) { }

  concursos: Concurso[];
  
  getConcursos(): void{
      this.concursoService.getConcursos().subscribe(concursos => this.concursos = concursos);
  }

  ngOnInit() {
      this.getConcursos();
  }

}
