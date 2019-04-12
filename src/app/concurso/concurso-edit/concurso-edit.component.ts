import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {DatePipe} from '@angular/common';
import {ConcursoService} from '../concurso.service';
import {ConcursoCreateComponent} from '../concurso-create/concurso-create.component';
import {Concurso} from '../concurso';
import {ConcursoDetail} from '../concurso-detail';
@Component({
  selector: 'app-concurso-edit',
  templateUrl: './concurso-edit.component.html',
  styleUrls: ['./concurso-edit.component.css'],
  providers: [DatePipe]
})
export class ConcursoEditComponent implements OnInit {

  constructor(private concursoService: ConcursoService,
              private toastrService: ToastrService) { }


  @Input() concurso_id: number;

  @Input() concurso: ConcursoDetail;

  @Output() cancel = new EventEmitter();
  
  @Output() update = new EventEmitter();
  
  getConcurso(): void {
    this.concursoService.getConcursoDetail(this.concurso_id)
        .subscribe(concurso => {
            this.concurso = concurso;
        });
  }
  
  editConcurso(): void{
      this.concursoService.updateConcurso(this.concurso).subscribe(
      () => {this.toastrService.success("La informacion del concurso se actualizo");}
      );
      this.update.emit();
  }
  
  cancelEdit(): void{
      this.cancel.emit();
  }
  
  ngOnInit() {
      this.concurso = new ConcursoDetail();
      this.getConcurso();
  }

}
