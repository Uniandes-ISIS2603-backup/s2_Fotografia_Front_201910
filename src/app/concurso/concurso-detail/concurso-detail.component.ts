import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConcursoService } from '../concurso.service';
import { AuthService } from '../../auth/auth.service';
import {ToastrService} from 'ngx-toastr';
import { ConcursoDetail } from '../concurso-detail';
import { Concurso } from '../concurso';
import { Fotografo } from '../../fotografo/fotografo';


@Component({
  selector: 'app-concurso-detail',
  templateUrl: './concurso-detail.component.html',
  styleUrls: ['./concurso-detail.component.css']
})



export class ConcursoDetailComponent implements OnInit {

  constructor(private concursoService: ConcursoService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private toastrService: ToastrService
              ) { }

  concursoDetail: ConcursoDetail;

  concurso_id: number;
  
  fotografo: any;
  
  show: boolean;
  
  reglas: string[];
  
  getConcursoDetail(): void {
        this.concursoService.getConcursoDetail(this.concurso_id)
            .subscribe(concursoDetail => {
                this.concursoDetail = concursoDetail;
            });        
    }
    
   getFotografoDetail(pFotografo): void{
       this.concursoService.getFotografoDetail(this.concurso_id, pFotografo)
            .subscribe(fotografoDetail => {
                this.fotografo = fotografoDetail
            });
       
   }
    
    /**
     * Dice el numero de fotos que tiene un fotografo participando en el concurso.
     * Si el fotografo entrado por parametro no esta en el concurso devuelve -1.
     * @param fotografo El fotografo cuyas fotos se quieren comparar
     */
  
   
 
   agregarFotografo(): void{
       if(localStorage.getItem('role') === 'FOTOGRAFO'){
           this.fotografo = JSON.parse(localStorage.getItem('currentUser'));
           this.concursoService.putFotografo(this.concursoDetail, this.fotografo).subscribe(fotografo =>{
               this.fotografo = fotografo;
               this.toastrService.success("Te uniste al concurso!", "UnirseConcurso");
           });
       }
      
   }
   
   showAgregarFoto(): void{
      if(localStorage.getItem('role') === 'FOTOGRAFO'){
      this.fotografo = JSON.parse(localStorage.getItem('currentUser'));
      this.concursoService.getFotografos(this.concursoDetail)
       .subscribe(fotografosDetail =>{
           let fotografos = fotografosDetail.filter(fotografo =>
           fotografo.id === this.fotografo.id
            );
       
           if(fotografos.length === 0){
               this.toastrService.warning("Necesitas ingresar al concurso para añadir la foto", "Ingreso de foto");
           }
           else{
               this.fotografo = fotografos[0];
               console.log(fotografos[0]);
               this.show = true; 
            }
       });
      }
   }
   
   agregarFoto(foto): void{
       this.concursoService.putPhoto(this.concursoDetail, foto).subscribe(pFoto => {
           this.toastrService.success("Agregaste la foto al concurso!", "Ingresar foto");
           this.show  = false;
           this.ngOnInit;
       });
   }
   

        
        
  ngOnInit() {
      this.concurso_id = +this.route.snapshot.paramMap.get('id');
      this.concursoDetail = new ConcursoDetail();
      this.getConcursoDetail();
      this.show = false;
      
  }

}
