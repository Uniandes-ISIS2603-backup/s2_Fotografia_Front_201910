import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { JuradoService } from '../jurado.service';
import { ToastrService } from 'ngx-toastr';
import { Jurado } from '../jurado';
import {Concurso} from '../../concurso/concurso';

@Component({
    selector: 'app-jurado-concurso',
    templateUrl: './jurado-concurso.component.html',
})
export class JuradoConcursoComponent implements OnInit {

      /**
    * The constructor of the component
    * @param photoService The photo service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private juradoService: JuradoService,
    private toastrService: ToastrService
) { }

    @Input() juradoConcurso : Concurso;
    
    public isCollapsed = false;


    /**
     * The function called when a Calificacion is posted to update the Calificacions
     */
    updateConcurso(concurso: Concurso): void {
       this.juradoConcurso = concurso;
    }
    
    ngOnInit(){
    }
}