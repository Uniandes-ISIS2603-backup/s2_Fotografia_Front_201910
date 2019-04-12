import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import { FotografoService } from '../fotografo.service';
import { Fotografo } from '../fotografo';
import { FotografoDetail } from '../fotografo-detail';

@Component({
  selector: 'app-fotografo',
  templateUrl: './fotografo-list.component.html',
  styleUrls: ['./fotografo-list.component.css']
})
export class FotografoListComponent implements OnInit {

   /**
    * Constructor for the component
    * @param fotografoService The fotografo's services provider
    */
   constructor(
    private fotografoService: FotografoService,
  
) { }

/**
* The list of Fotografos which belong to the BookStore
*/
fotografos: Fotografo[];
fotografo_id: number;
selectedFotografo : Fotografo;

/**
    * Shows or hides the create component
    */
   showCreate: boolean;

   /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;


  onSelected(fotografo_id: number): void {
    this.fotografo_id = fotografo_id;
    this.selectedFotografo= new FotografoDetail();
    this.fotografoService.getFotografoDetail(fotografo_id).subscribe(o => this.selectedFotografo = o);
  }
/**
* Asks the service to update the list of Fotografos
*/
getFotografos(): void {
    this.fotografoService.getFotografos()
        .subscribe(fotografos => {
            this.fotografos = fotografos;
        });
}

getFotografoDetail(): void {
    this.fotografoService.getFotografoDetail(this.fotografo_id)
        .subscribe(selectedFotografo => {
            this.selectedFotografo = selectedFotografo
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
showHideEdit(fotografo_id: number): void {
    if (!this.showEdit || (this.showEdit && fotografo_id != this.fotografo_id)) {
        this.showCreate = false;
        this.showEdit = true;
        this.fotografo_id = fotografo_id;
    }
    else {
        this.showEdit = false;
    }
}

updateEditorial(): void {
    this.showEdit = false;
}

/**
* This will initialize the component by retrieving the list of Fotografos from the service
* This method will be called when the component is created
*/
ngOnInit() {
    this.getFotografos();
}

}
