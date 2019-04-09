import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CalificacionService } from '../calificacion.service';

import { CalificacionDetail } from '../calificacion-detail';
import { Calificacion } from '../calificacion';

@Component({
  selector: 'app-calificacion-detail',
  templateUrl: './calificacion-detail.component.html',
  styleUrls: ['./calificacion-detail.component.css']
})
export class CalificacionDetailComponent implements OnInit {

 /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param calificacionService The calificacion's services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private route: ActivatedRoute,
    private calificacionService: CalificacionService 
) { }




/**
* El id del calificacion que viene en el path get .../calificacions/calificacion_id
*/
calificacion_id: number;

/**
* The editorial whose details we want to show
*/
calificacionDetail: CalificacionDetail;

/**
* The method which obtains the calificacion whose details we want to show
*/
getcalificacionDetail(): void {
    this.calificacionService.getCalificacionDetail(this.calificacion_id)
        .subscribe(calificacionDetail => {
            this.calificacionDetail = calificacionDetail
        });
}


/**
* The method which initializes the component.
* We need to create the calificacion so it is never considered as undefined
*/
ngOnInit() {
    this.calificacion_id = +this.route.snapshot.paramMap.get('id');
        this.calificacionDetail = new CalificacionDetail();
        this.getcalificacionDetail();
}

}
