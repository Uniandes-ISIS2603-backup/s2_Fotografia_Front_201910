import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef ,Input} from '@angular/core';
import { ActivatedRoute, Params ,Router,NavigationEnd} from '@angular/router';
import {FotografoService} from '../fotografo.service';
import {FotografoDetail} from '../fotografo-detail';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { FotografoInteresfotograficoComponent } from './../fotografo-interesfotografico/fotografo-interesfotografico.component';
import { PhotoService } from '../../photo/photo.service';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-fotografo-detail',
  templateUrl: './fotografo-detail.component.html',
  styleUrls: ['./fotografo-detail.component.css']
})
export class FotografoDetailComponent implements OnInit 
{

constructor(private fotografoService: FotografoService,
    private route: ActivatedRoute,
    private modalDialogService: ModalDialogService,
    private router: Router,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService,
    private photoService: PhotoService
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
    @ViewChild(FotografoInteresfotograficoComponent) reviewListComponent: FotografoInteresfotograficoComponent;

    /**
     * The child BookReviewListComponent
     */
    
    toggleReviews(): void {
       
       /**  this.reviewListComponent.isCollapsed = !this.reviewListComponent.isCollapsed;*/
    }

    

  @Input() fotografoDetail: FotografoDetail;
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
 
 showAddFoto: boolean;

/**
* El id del fotografo que viene en el path get .../fotografos/fotografoId
*/
fotografo_id: number;

  @Input() id: number;
    loader: any;

    getFotografoDetail(): void {
      console.log(this.id);
    this.fotografoService.getFotografoDetail(this.id)
      .subscribe(cli => {
        this.fotografoDetail = cli
      });
  }

  onLoad(params) {
    this.id = parseInt(params['id']);
    console.log(" en detail " + this.id);
    this.fotografoDetail = new FotografoDetail();
    this.getFotografoDetail();
    console.log(this.fotografoDetail)
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
    this.showAddFoto = false;
  }
  
  showAddPhoto(): void{
      this.showAddFoto = !this.showAddFoto;
  }
  
  showHideEdit(id: number): void {
    if (!this.showEdit || (this.showEdit && id != id)) {
        this.showCreate = false;
        this.showEdit = true;
        this.id = id;
    }
    else {
        this.showEdit = false;
    }
   }

   showHideConfig(fotografo_id: number): void {
    if (!this.showConfig || (this.showConfig && fotografo_id != this.fotografo_id)) {
        this.showCreate = false;
        this.showConfig = true;
        this.fotografo_id = fotografo_id;
    }
    else {
        this.showConfig = false;
    }
   }
   desplegarMenu(fotografo_id: number): void {
    if (!this.desplegar || (this.desplegar && fotografo_id != this.fotografo_id)) {
       
        this.desplegar = true;
        this.fotografo_id = fotografo_id;
    }
    else {
        this.desplegar = false;
    }
   }
   
   addPhoto(foto): void{
       this.photoService.createPhoto(foto)
       .subscribe(pFoto =>{
           
          this.fotografoService.postPhoto(this.fotografoDetail, pFoto)
          .subscribe(uFoto =>{
              let nuevaFoto: Photo = new Photo(uFoto.id, uFoto.nombre, uFoto.rutaFoto,
              uFoto.date, uFoto.description, uFoto.price, uFoto.winner, uFoto.published);
              this.fotografoDetail.fotos.push(nuevaFoto);
              this.toastrService.success("Se añadio la foto", "Adicion de Foto");
              this.ngOnInit();
          });
       });
   }
   
updateFotografo(): void {
    this.showEdit = false;
}
  ngOnDestroy() {
    this.loader.unsubscribe();
  }

  eliminar(fotografo_id: number): void{
    
    if (!this.confirmar || (this.desplegar && fotografo_id != this.fotografo_id)) {
       
      this.confirmar = true;
      this.fotografo_id = fotografo_id;
  }
  else {
      this.confirmar = false;
  }
  }

  alerta(texto:string){
    alert(texto);
  }


  verificarFotos(): void{
  if(this.fotografoDetail.fotos.length!=0){
    this.sinFotos = true;
    this.mandeError = false;
    
  }
  else{
   this.sinFotos = false;
   this.mandeError = true;

  }
  }
  
    delete(): void {
      console.log(this.fotografoDetail);
      this.fotografoService.deleteFotografo(this.fotografoDetail.id)
          .subscribe(
          );
  
  }

}
