import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef ,Input} from '@angular/core';
import { ActivatedRoute, Params ,Router,NavigationEnd} from '@angular/router';
import {FotografoService} from '../fotografo.service';
import {FotografoDetail} from '../fotografo-detail';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { FotografoInteresfotograficoComponent } from './../fotografo-interesfotografico/fotografo-interesfotografico.component';


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
    @ViewChild(FotografoInteresfotograficoComponent) reviewListComponent: FotografoInteresfotograficoComponent;

    /**
     * The child BookReviewListComponent
     */
    
    toggleReviews(): void {
       
       /**  this.reviewListComponent.isCollapsed = !this.reviewListComponent.isCollapsed;*/
    }

    

  @Input() fotografoDetail: FotografoDetail;

/**
* El id del fotografo que viene en el path get .../fotografos/fotografoId
*/
fotografoId: number;

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
    this.fotografoDetail = new FotografoDetail();
    this.getFotografoDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}
