
import { Component, OnInit, OnChanges, Input} from '@angular/core';
import {InteresFotograficoService} from '../interes-fotografico.service';
import {InteresFotograficoDetail} from '../interes-fotografico-detail';
import {  OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params ,Router,NavigationEnd} from '@angular/router';
import {PhotoService} from '../../photo/photo.service';
import {PhotoModule} from '../../photo/photo.module';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-interes-fotografico-detail',
  templateUrl: './interes-fotografico-detail.component.html',
  styleUrls: ['./interes-fotografico-detail.component.css']
})
export class InteresFotograficoDetailComponent implements OnInit
{

  constructor(private interesFotograficoService: InteresFotograficoService,
    private route: ActivatedRoute,
    private modalDialogService: ModalDialogService,
    private photoService: PhotoService,
    private router: Router,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService

) {
    //This is added so we can refresh the view when one of the books in
    //the "Other books" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
        if (e instanceof NavigationEnd) {
            this.ngOnInit();
        }
    });
}
navigationSubscription;

verif:boolean;

    /**
     * The child BookReviewListComponent
     */
    
    toggleReviews(): void {
       
       /**  this.reviewListComponent.isCollapsed = !this.reviewListComponent.isCollapsed;*/
    }

    

  @Input() interesFotograficoDetail: InteresFotograficoDetail;
  /** 
  * Shows or hides the create component
  */
 showCreate: boolean;

 desplegar :boolean;

 confirmar : boolean;

 sinFotos:boolean;
 mandeError: boolean;

 fotos:Photo[];

 /**
  * Shows or hides the edit component.
  */
 showEdit: boolean;
 crear:boolean;

 showConfig : boolean;

/**
* El id del interesFotografico que viene en el path get .../interesFotograficos/interesFotograficoId
*/
interesFotografico_id: number;

fotoId: number;


  @Input() id: number;
    loader: any;
    

  

    getInteresFotograficoDetail(): void {
      console.log(this.id);
    this.interesFotograficoService.getInteresFotograficoDetail(this.id)
      .subscribe(cli => {
        this.interesFotograficoDetail = cli;
      });

     this.verif = false;
  }

  onLoad(params) {

    this.id = parseInt(params['id']);
    console.log(" en detail " + this.id);
    this.interesFotograficoDetail = new InteresFotograficoDetail();
    this.getInteresFotograficoDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
    this.interesFotograficoDetail;
    this.getInteresFotograficoDetail();
  }
  showHideEdit(interesFotografico_id: number): void {
    if (!this.showEdit || (this.showEdit && interesFotografico_id != this.interesFotograficoDetail.id)) {
        this.showCreate = false;
        this.showEdit = true;
        this.interesFotografico_id = interesFotografico_id;
        this.interesFotograficoDetail = new InteresFotograficoDetail();
        this.getInteresFotograficoDetail();
    }
    else {
        this.showEdit = false;
    }
   }


   desplegarMenu(interesFotografico_id: number): void {
    if (!this.desplegar || (this.desplegar && interesFotografico_id != this.interesFotografico_id)) {
       
        this.desplegar = true;
        this.interesFotografico_id = interesFotografico_id;
    }
    else {
        this.desplegar = false;
    }
   }
updateInteresFotografico(): void {
    this.showEdit = false;
    this.ngOnInit();
}
  ngOnDestroy() {
    this.loader.unsubscribe();
  }

  eliminar(interesFotografico_id: number): void{
    
    if (!this.confirmar || (this.desplegar && interesFotografico_id != this.interesFotografico_id)) {
       
      this.confirmar = true;
      this.interesFotografico_id = interesFotografico_id;
  }
  else {
      this.confirmar = false;
  }
  }

  alerta(texto:string){
    alert(texto);
  }


  verificarFotos(): void{

  if(this.interesFotograficoDetail.fotosInteres.length!=0){
    this.sinFotos = true;
    this.mandeError = false;
    
  }
  else{
   this.sinFotos = false;
   this.mandeError = true;
  }
  }
  

 
  
  verf():void{
this.verif = true;

  }
  delete(): void {
    console.log(this.interesFotograficoDetail);
    this.interesFotograficoService.deleteInteresFotografico(this.interesFotograficoDetail.id)
        .subscribe(
        );

      return alert ('El interes fotografico fue eliminado');

}

}
