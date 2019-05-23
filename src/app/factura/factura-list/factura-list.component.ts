import { Component, OnInit, ViewContainerRef, OnChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';

import { FacturaService } from '../factura.service';
import { Factura } from '../factura';
import { FacturaDetail } from '../factura-detail';

@Component({
  selector: 'app-factura',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent implements OnInit, OnChanges{

  /**
   * Constructor for the component
   * @param facturaService The factura's services provider
   */
  constructor(
    private facturaService: FacturaService,
  ) { }

  /**
  * The list of factura which belong to the BookStore
  */
  facturas: Factura[];
  factura_edit_id: number;
  selectedFactura: Factura;

  /**
  * Shows or hides the create component
  */
  showCreate: boolean;

  /**
   * Shows or hides the edit component.
   */
  showEdit: boolean;

  onSelected(factura_id: number): void {
    this.factura_edit_id = factura_id;
    this.selectedFactura = new FacturaDetail(0,0,0,null);
    this.getFacturaDetail();
  }
  /**
  * Asks the service to update the list of factura
  */
  getFacturas(): void {
    this.facturaService.getFacturas()
      .subscribe(factura => {
        this.facturas = factura;
      });
  }

  getFacturaDetail(): void {
    this.facturaService.getFacturaDetail(this.factura_edit_id)
      .subscribe(selectedFactura => {
        this.selectedFactura = selectedFactura
      });
  }

  /**
  * Shows or hides the create component
  */
  showHideCreate(): void {
    this.showEdit = false;
    this.showCreate = !this.showCreate!
  }

  /**
  * Shows or hides the create component
  */
  showHideEdit(factura_id: number): void {
    if (!this.showEdit || (this.showEdit && factura_id != this.factura_edit_id)) {
      this.showCreate = false;
      this.showEdit = true;
      this.factura_edit_id = factura_id;
    }
    else {
      this.showEdit = false;
    }
  }

  updateFactura(): void {
    this.showEdit = false;
  }

  /**
  * This will initialize the component by retrieving the list of Jurados from the service
  * This method will be called when the component is created
  */
  ngOnInit() {
    this.getFacturas();
  }
  ngOnChanges() {
    this.getFacturas();
  }
}
