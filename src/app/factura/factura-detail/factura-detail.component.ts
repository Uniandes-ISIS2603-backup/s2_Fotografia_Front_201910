import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FacturaService } from '../factura.service';

import { FacturaDetail } from '../factura-detail';
import { Factura } from '../factura';

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
    private facturaService: FacturaService
  ) { }




  /**
  * El id del factura que viene en el path get .../factura/factura_id
  */
  factura_id: number;

  /**
  * The factura whose details we want to show
  */
  facturaDetail: FacturaDetail;

  /**
  * The method which obtains the factura whose details we want to show
  */
  getFacturaDetail(): void {
    this.facturaService.getFacturaDetail(this.factura_id)
      .subscribe(facturaDetail => {
        this.facturaDetail = facturaDetail
      });
  }


  /**
  * The method which initializes the component.
  * We need to create the Jurado so it is never considered as undefined
  */
  ngOnInit() {
    this.factura_id = +this.route.snapshot.paramMap.get('id');
    this.facturaDetail = new FacturaDetail();
    this.getFacturaDetail();
  }

}
