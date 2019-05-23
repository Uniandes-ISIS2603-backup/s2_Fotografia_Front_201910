import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrganizadorService } from '../organizador.service';

import { OrganizadorDetail } from '../organizador-detail';
import { Organizador } from '../organizador';


@Component({
    selector: 'app-organizador-detail',
    templateUrl: './organizador-detail.component.html',
    styleUrls: ['./organizador-detail.component.css']
})
export class OrganizadorDetailComponent implements OnInit {

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param organizadorService The organizador's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private organizadorService: OrganizadorService 
    ) { }

    /**
    * The organizador
    */
   organizadorDetail: OrganizadorDetail;

   organizadors: Organizador[];

    /**
    * El id del organizador que viene en el path get .../organizadors/organizador_id
    */
   organizador_id: number;
   
   showCreate: boolean;
   
    /**
    * The method which obtains the organizador whose details we want to show
    */
    getOrganizadorDetail(): void {
        this.organizadorService.getOrganizadorDetail(this.organizador_id)
            .subscribe(organizadorDetail => {
                this.organizadorDetail = organizadorDetail
            });
    }

    showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }
   /**
* Asks the service to update the list of Organizadors
*/
getOrganizadors(): void {
    this.organizadorService.getOrganizadors()
        .subscribe(organizadors => {
            this.organizadors = organizadors;
        });
}
    /**
    * The method which initializes the component.
    * We need to create the organizador so it is never considered as undefined
    */
    ngOnInit() {
        this.organizador_id = +this.route.snapshot.paramMap.get('id');
        this.organizadorDetail = new OrganizadorDetail();
        this.getOrganizadorDetail();
        this.showCreate = false;
        this.getOrganizadors();
    }

    atu():void{
        this.organizador_id = +this.route.snapshot.paramMap.get('id');
        this.organizadorDetail = new OrganizadorDetail();
        this.getOrganizadorDetail();
        this.showCreate = false;
        this.getOrganizadors(); 
    }
}
