import { Component, OnInit, Input } from '@angular/core';
import {FormaDePagoService} from '../forma-de-pago.service';
import {FormaDePagoDetail} from '../forma-de-pago-detail';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forma-de-pago-delete',
  templateUrl: './forma-de-pago-delete.component.html',
  styleUrls: ['./forma-de-pago-delete.component.css']
})
export class FormaDePagoDeleteComponent implements OnInit {
  /**
   * Id de la forma de pago que se desea eliminar
   */
  @Input() formaDePagoDetail: FormaDePagoDetail;


/**
 * Constructor del componente
 * @param formaDePagoServide el proveedor de servicios de la forma de pago
 */
constructor(private router: Router,
  private formaDePagoService: FormaDePagoService, private toastrService: ToastrService) { }

ngOnInit() 
{

}

deleteFormaDePago(formaDePagoDetail: FormaDePagoDetail): void {
  console.log(this.formaDePagoDetail);
  this.formaDePagoService.deleteFormaDePago(formaDePagoDetail.id)
      .subscribe(fdp => {
        
      }
      );
}

}
