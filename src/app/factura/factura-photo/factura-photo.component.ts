import { Component, OnInit, Input } from '@angular/core';
import { FacturaService } from '../factura.service';
import { Photo } from '../../photo/photo';


@Component({
  selector: 'factura-photo',
  templateUrl: './factura-photo.component.html',
  styleUrls: ['./factura-photo.component.css']
})
export class FacturaPhotoComponent implements OnInit {

  constructor(private facturaService: FacturaService) { }


  @Input() idcurso: number;
  
  isCollapsed: boolean = true;
  
  foto: Photo;

  

  getFoto(idFoto: number): void {
    console.log("getFoto " + idFoto);
    this.facturaService.getFacturaFoto(idFoto)
      .subscribe(h => {
        this.foto = h
      });
  }

  getFacturaFoto(): void {
    console.log("getCursoHistoria :" + this.idcurso);
    this.getFoto(this.idcurso);
    this.togglehistorias();
  }

  togglehistorias(): void {

    this.isCollapsed = !this.isCollapsed;
  }
  /**
  * The method which initializes the component.
  * We need to create the curso so it is never considered as undefined
  */
  ngOnInit() {
    console.log(this.idcurso);
     if (this.foto == undefined)
     this.foto = new Photo();
    this.isCollapsed  = true;
    this.getFacturaFoto();
  }
}