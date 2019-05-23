    
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {ConcursoService} from '../concurso.service';
import {OrganizadorService} from '../../organizador/organizador.service';
import {Concurso} from '../concurso';
import {Organizador} from '../../organizador/organizador';

@Component({
    selector: 'app-concurso-create',
    templateUrl: './concurso-create.component.html',
    styleUrls: ['./concurso-create.component.css'],
    providers: [DatePipe]
})
export class ConcursoCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param concursoService The concursos' services provider
    * @param organizadorService The organizadors' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private concursoService: ConcursoService,
        private organizadorService: OrganizadorService,
        private toastrService: ToastrService,
        private router: Router
    ) {}
    
    @Input() organizadorId: number;

    @Output() create = new EventEmitter();
    
    @Output() cancel = new EventEmitter();

    /**
     * 
     */
    reglas: string;
    /**
    * The new concurso
    */
    concurso: Concurso;

    /**
    * The list of all the organizadors in the concursoStore
    */
    organizadors: Organizador[];

    /**
    * Retrieves the list of organizadors in the concursoStore
    */
    getOrganizadors(): void {
        this.organizadorService.getOrganizadors()
            .subscribe(organizadors => {
                this.organizadors = organizadors;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }
    
    subirRegla(): void {
        if(!this.concurso.restricciones){
            this.concurso.restricciones = "";
        }
        this.concurso.restricciones += ";" + this.reglas;
        this.reglas = "";
    }

    /**
    * Creates a new concurso
    */
   createConcurso(): Concurso{
    this.concursoService.createConcurso(this.concurso).subscribe(concurso => {
        this.concurso = concurso;
        this.create.emit();
        this.toastrService.success("El concurso se creo", "Creacion del Concurso");
    });
    return this.concurso;
}
    /**
    * Cancels the creation of the new concurso
    * Redirects to the concursos' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('El concurso no fue creado', 'Creacion del concurso');
        this.router.navigate(['/concursos/list']);
    }


    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.concurso = new Concurso();
        this.concurso.organizador = new Organizador(this.organizadorId);
    }

}