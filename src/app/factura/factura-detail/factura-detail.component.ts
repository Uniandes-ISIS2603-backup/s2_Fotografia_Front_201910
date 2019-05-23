
import { FacturaService } from '../factura.service';

import { FacturaDetail } from '../factura-detail';
import { Factura } from '../factura';
import { FacturaPhotoComponent  } from '../factura-photo/factura-photo.component';
import { Photo } from '../../photo/photo';
import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef ,Input} from '@angular/core';
import { ActivatedRoute, Params ,Router,NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';



@Component({
  selector: 'app-factura-detail',
  templateUrl: './factura-detail.component.html',
  styleUrls: ['./factura-detail.component.css']
})
export class FacturaDetailComponent implements OnInit {

  /**
     * Constructor for the component
     * @param route The route which helps to retrieves the id of the book to be shown
     * @param FacturaService The factura's services provider
     * @param toastrService The toastr to show messages to the user
     */
  constructor(
    private route: ActivatedRoute,
    private facturaService: FacturaService,
    private router: Router
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

  @ViewChild(FacturaPhotoComponent) photoComponen: FacturaPhotoComponent;



  /**
  * El id del factura que viene en el path get .../factura/factura_id
  */
 @Input()  factura_id: number;

  /**
  * The factura whose details we want to show
  */
 @Input() facturaDetail: FacturaDetail;

 loader: any;



  /**
  * The method which obtains the factura whose details we want to show
  */
  getFacturaDetail(): void {
    this.facturaService.getFacturaDetail(this.factura_id)
      .subscribe(facturaDetail => {
        this.facturaDetail = facturaDetail
      });
  }
  onLoad(params) {
    this.factura_id = parseInt(params['id']);
    console.log(" en detail " + this.factura_id);
    this.facturaDetail = new FacturaDetail(0,0,0,null);
    this.getFacturaDetail();
  }

  /**
  * The method which initializes the component.
  * We need to create the factura so it is never considered as undefined
  */
 ngOnInit() {
  this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
}

}
