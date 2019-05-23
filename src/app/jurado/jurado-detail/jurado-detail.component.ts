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
    * Shows or hides the edit component.
    */
   showEdit: boolean;

   /**
    * Shows or hides the create component
    */
   showCreate: boolean;

   jurado_edit_id: number;

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
* Shows or hides the create component
*/
showHideEdit(jurado_id: number): void {
    if (!this.showEdit || (this.showEdit && jurado_id != this.jurado_edit_id)) {
        this.showCreate = false;
        this.showEdit = true;
        this.jurado_edit_id = jurado_id;
    }
    else {
        this.showEdit = false;
    }
}

updateJurado(): void {
    this.showEdit = false;
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
