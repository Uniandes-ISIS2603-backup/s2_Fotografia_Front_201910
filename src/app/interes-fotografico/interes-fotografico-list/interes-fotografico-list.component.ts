import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import { InteresFotograficoService } from '../interes-fotografico.service';
import { InteresFotografico } from '../interes-fotografico';
import { InteresFotograficoDetail } from '../interes-fotografico-detail';

@Component({
  selector: 'app-interes-fotografico-list',
  templateUrl: './interes-fotografico-list.component.html',
  styleUrls: ['./interes-fotografico-list.component.css']
})
export class InteresFotograficoListComponent implements OnInit {

   /**
    * Constructor for the component
    * @param interesFotograficoService The interesFotografico's services provider
    */
   constructor(
    private interesFotograficoService: InteresFotograficoService,
  
) { }

/**
* The list of InteresFotograficos which belong to the BookStore
*/
interesFotograficos: InteresFotografico[];
interesFotografico_id: number;
selectedInteresFotografico : InteresFotografico;

/**
    * Shows or hides the create component
    */
   showCreate: boolean;

   /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;


  onSelected(interesFotografico_id: number): void {
    this.interesFotografico_id = interesFotografico_id;
    this.selectedInteresFotografico= new InteresFotograficoDetail();
    this.interesFotograficoService.getInteresFotograficoDetail(interesFotografico_id).subscribe(o => this.selectedInteresFotografico = o);
  }
/**
* Asks the service to update the list of InteresFotograficos
*/
getInteresFotograficos(): void {
    this.interesFotograficoService.getInteresFotograficos()
        .subscribe(interesFotograficos => {
            this.interesFotograficos = interesFotograficos;
        });
}

getInteresFotograficoDetail(): void {
    this.interesFotograficoService.getInteresFotograficoDetail(this.interesFotografico_id)
        .subscribe(selectedInteresFotografico => {
            this.selectedInteresFotografico = selectedInteresFotografico
        });
}

/**
    * Shows or hides the create component
    */
   showHideCreate(): void {
    this.showEdit = false;
    this.showCreate = !this.showCreate!
}

/**
* Shows or hides the create component
*/
showHideEdit(interesFotografico_id: number): void {
    if (!this.showEdit || (this.showEdit && interesFotografico_id != this.interesFotografico_id)) {
        this.showCreate = false;
        this.showEdit = true;
        this.interesFotografico_id = interesFotografico_id;
    }
    else {
        this.showEdit = false;
    }
}

updateEditorial(): void {
    this.showEdit = false;
}

/**
* This will initialize the component by retrieving the list of InteresFotograficos from the service
* This method will be called when the component is created
*/
ngOnInit() {
    this.getInteresFotograficos();
}

}

