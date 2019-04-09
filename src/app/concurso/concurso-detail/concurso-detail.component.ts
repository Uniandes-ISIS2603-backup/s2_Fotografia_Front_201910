import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConcursoService } from '../concurso.service';
import { ConcursoDetail } from '../concurso-detail';
import { Concurso } from '../concurso';




@Component({
  selector: 'app-concurso-detail',
  templateUrl: './concurso-detail.component.html',
  styleUrls: ['./concurso-detail.component.css']
})



export class ConcursoDetailComponent implements OnInit {

  constructor(private concursoService: ConcursoService,
              private route: ActivatedRoute) { }

  concursoDetail: ConcursoDetail;

  concurso_id: number;
  
  getConcursoDetail(): void {
        this.concursoService.getConcursoDetail(this.concurso_id)
            .subscribe(concursoDetail => {
                this.concursoDetail = concursoDetail
            });
    }

  ngOnInit() {
      this.concurso_id = +this.route.snapshot.paramMap.get('id');
      this.concursoDetail = new ConcursoDetail();
      this.getConcursoDetail();
  }

}
