import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RondaService } from '../ronda.service';

import { RondaDetail } from '../ronda-detail';
import { Ronda } from '../ronda';

@Component({
  selector: 'app-ronda-detail',
  templateUrl: './ronda-detail.component.html',
  styleUrls: ['./ronda-detail.component.css']
})
export class RondaDetailComponent implements OnInit {

 /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param rondaService The ronda's services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private route: ActivatedRoute,
    private rondaService: RondaService 
) { }




/**
* El id del ronda que viene en el path get .../rondas/ronda_id
*/
ronda_id: number;

/**
* The editorial whose details we want to show
*/
rondaDetail: RondaDetail;

/**
* The method which obtains the ronda whose details we want to show
*/
getRondaDetail(): void {
    this.rondaService.getRondaDetail(this.ronda_id)
        .subscribe(rondaDetail => {
            this.rondaDetail = rondaDetail
        });
}


/**
* The method which initializes the component.
* We need to create the Ronda so it is never considered as undefined
*/
ngOnInit() {
    this.ronda_id = +this.route.snapshot.paramMap.get('id');
        this.rondaDetail = new RondaDetail();
        this.getRondaDetail();
}

}
