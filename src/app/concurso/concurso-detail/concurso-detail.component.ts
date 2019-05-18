import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConcursoService } from '../concurso.service';
import { AuthService } from '../../auth/auth.service';
import { ConcursoDetail } from '../concurso-detail';
import { Concurso } from '../concurso';



@Component({
  selector: 'app-concurso-detail',
  templateUrl: './concurso-detail.component.html',
  styleUrls: ['./concurso-detail.component.css']
})



export class ConcursoDetailComponent implements OnInit {

  constructor(private concursoService: ConcursoService,
              private route: ActivatedRoute,
              private authService: AuthService
              ) { }

  concursoDetail: ConcursoDetail;

  concurso_id: number;
  
  fotografo: any;
  
  show: boolean;
  
  getConcursoDetail(): void {
        this.concursoService.getConcursoDetail(this.concurso_id)
            .subscribe(concursoDetail => {
                this.concursoDetail = concursoDetail
            });
    }
    
   agregarFotografo(): void{
       this.fotografo = this.authService.getCurrentUser();
       if(this.fotografo){
           this.concursoService.putFotografo(this.concursoDetail, this.fotografo).subscribe(fotografo =>{
               this.fotografo = fotografo;
           });
           console.log(this.fotografo);
       }
      
   }
   
   showPhotos(): void{
       this.show = true;
   }

  ngOnInit() {
      this.concurso_id = +this.route.snapshot.paramMap.get('id');
      this.concursoDetail = new ConcursoDetail();
      this.show = false;
      this.getConcursoDetail();
      
  }

}
