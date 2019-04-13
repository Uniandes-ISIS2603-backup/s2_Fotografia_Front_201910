import { Component, OnInit, Input } from '@angular/core';
import {InteresFotografico} from '../../interes-fotografico/interes-fotografico';
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
  
  interesFotografico: InteresFotografico;

  
ngOnInit(){
  
}

  
}
