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
  concurso_edit_id: number;
  selectedConcurso : Concurso;
  showCreate: boolean;
  showEdit: boolean;
  
  getConcursos(): void{
      this.concursoService.getConcursos().subscribe(concursos => this.concursos = concursos);
  }
  
  showHideCreate(): void {
    this.showEdit = false;
    this.showCreate = !this.showCreate
  }
  
  showHideEdit(concurso_id: number): void {
    if (!this.showEdit || (this.showEdit && concurso_id != this.concurso_edit_id)) {
        this.showCreate = false;
        this.showEdit = true;
        this.concurso_edit_id = concurso_id;
    }
    else {
        this.showEdit = false;
    }
  }

  updateConcurso(): void {
    this.showEdit = false;
  }

  ngOnInit() {
      this.getConcursos();
      this.showCreate=false;
  }

}
