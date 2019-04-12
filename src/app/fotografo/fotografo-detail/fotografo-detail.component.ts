import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {FotografoService} from '../fotografo.service';
import {FotografoDetail} from '../fotografo-detail';

@Component({
  selector: 'app-fotografo-detail',
  templateUrl: './fotografo-detail.component.html',
  styleUrls: ['./fotografo-detail.component.css']
})
export class FotografoDetailComponent implements OnInit 
{

constructor(private fotografoService: FotografoService,
    private route: ActivatedRoute) { }

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
    console.log(" en detail " + this.id);
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
