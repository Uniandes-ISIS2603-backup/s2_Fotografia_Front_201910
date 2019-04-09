import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JuradoService } from '../jurado.service';

import { JuradoDetail } from '../jurado-detail';
import { Jurado } from '../jurado';

@Component({
  selector: 'app-jurado-detail',
  templateUrl: './jurado-detail.component.html',
  styleUrls: ['./jurado-detail.component.css']
})
export class JuradoDetailComponent implements OnInit {

 /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param JuradoService The Jurado's services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private route: ActivatedRoute,
    private juradoService: JuradoService 
) { }




/**
* El id del Jurado que viene en el path get .../Jurados/Jurado_id
*/
jurado_id: number;

/**
* The editorial whose details we want to show
*/
juradoDetail: JuradoDetail;

/**
* The method which obtains the jurado whose details we want to show
*/
getjuradoDetail(): void {
    this.juradoService.getJuradoDetail(this.jurado_id)
        .subscribe(juradoDetail => {
            this.juradoDetail = juradoDetail
        });
}


/**
* The method which initializes the component.
* We need to create the Jurado so it is never considered as undefined
*/
ngOnInit() {
    this.jurado_id = +this.route.snapshot.paramMap.get('id');
        this.juradoDetail = new JuradoDetail();
        this.getjuradoDetail();
}

}
