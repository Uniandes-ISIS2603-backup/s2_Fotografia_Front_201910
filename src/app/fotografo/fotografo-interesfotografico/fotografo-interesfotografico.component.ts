import { Component, OnInit, Input } from '@angular/core';
import {InteresFotograficoDetail} from '../../interes-fotografico/interes-fotografico-detail';
import {FotografoService} from '../../fotografo/fotografo.service';
@Component({
  selector: 'app-fotografo-interesfotografico',
  templateUrl: './fotografo-interesfotografico.component.html',
  styleUrls: ['./fotografo-interesfotografico.component.css']
})
export class FotografoInteresfotograficoComponent implements OnInit {

  constructor(private fotografoService: FotografoService) { }


  @Input() idcurso: number;
  isCollapsed: boolean = true;
  
  interesFotografico: InteresFotograficoDetail[];
  /**
   * trae los intereses ftograficos del fotografo
   */
  getInteresesFotograficos(fotografoId: number): void {
    console.log("getInteresesFotograficos " + fotografoId);
    this.fotografoService.getFotografoInteresesFotograficos(fotografoId)
      .subscribe(fdp => {
        this.interesFotografico = fdp
      });
  }
  
ngOnInit(){

}

  
}
