
import { Component, OnInit, OnChanges, Input} from '@angular/core';
import {InteresFotograficoService} from '../interes-fotografico.service';
import {InteresFotograficoDetail} from '../interes-fotografico-detail';
import {  OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params ,Router,NavigationEnd} from '@angular/router';

import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

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

 /**
  * Shows or hides the edit component.
  */
 showEdit: boolean;

 showConfig : boolean;

/**
* El id del interesFotografico que viene en el path get .../interesFotograficos/interesFotograficoId
*/
interesFotografico_id: number;

  @Input() id: number;
    loader: any;

    getInteresFotograficoDetail(): void {
      console.log(this.id);
    this.interesFotograficoService.getInteresFotograficoDetail(this.id)
      .subscribe(cli => {
        this.interesFotograficoDetail = cli
      });
  }

  onLoad(params) {

    this.id = parseInt(params['id']);
    console.log(" en detail " + this.id);
    this.interesFotograficoDetail = new InteresFotograficoDetail();
    this.getInteresFotograficoDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }
  showHideEdit(interesFotografico_id: number): void {
    if (!this.showEdit || (this.showEdit && interesFotografico_id != this.interesFotografico_id)) {
        this.showCreate = false;
        this.showEdit = true;
        this.interesFotografico_id = interesFotografico_id;
    }
    else {
        this.showEdit = false;
    }
   }

   showHideConfig(interesFotografico_id: number): void {
    if (!this.showConfig || (this.showConfig && interesFotografico_id != this.interesFotografico_id)) {
        this.showCreate = false;
        this.showConfig = true;
        this.interesFotografico_id = interesFotografico_id;
    }
    else {
        this.showConfig = false;
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
  if(this.interesFotograficoDetail.fotos.length!=0){
    this.sinFotos = true;
    this.mandeError = false;
    
  }
  else{
   this.sinFotos = false;
   this.mandeError = true;
  }
  }
  delete(): void{

  }

}
