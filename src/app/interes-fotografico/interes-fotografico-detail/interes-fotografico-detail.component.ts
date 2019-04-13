import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {InteresFotograficoService} from '../interes-fotografico.service';
import {InteresFotograficoDetail} from '../interes-fotografico-detail';

@Component({
  selector: 'app-interes-fotografico-detail',
  templateUrl: './interes-fotografico-detail.component.html',
  styleUrls: ['./interes-fotografico-detail.component.css']
})
export class InteresFotograficoDetailComponent implements OnInit 
{

constructor(private interesFotograficoService: InteresFotograficoService,
    private route: ActivatedRoute) { }

  @Input() interesFotograficoDetail: InteresFotograficoDetail;

/**
* El id del interesFotografico que viene en el path get .../interesFotograficos/interesFotograficoId
*/
interesFotograficoId: number;

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

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}
