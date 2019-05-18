import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Organizador } from '../organizador';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {OrganizadorService} from '../organizador.service';



@Component({
  selector: 'app-organizador-create',
  templateUrl: './organizador-create.component.html',
  styleUrls: ['./organizador-create.component.css'],

})
export class OrganizadorCreateComponent implements OnInit {

  constructor(
        private organizadorService: OrganizadorService,
        private toastrService: ToastrService
  ) { }

  @Output() create = new EventEmitter<Organizador>();
    
  @Output() cancel = new EventEmitter();
  
  organizador: Organizador;
  
  createOrganizador(): Organizador{
        this.organizadorService.createOrganizador(this.organizador).subscribe(organizador => {
            this.organizador = new Organizador(organizador.id, organizador.nombre, organizador.apellido, organizador.telefono, organizador.foto);
            this.create.emit(this.organizador);
            this.toastrService.success("El organizador se creo", "Creacion del organizador");
        });
        return this.organizador;
  }
  
  cancelCreation(): void {
        this.cancel.emit();
    }

  ngOnInit() {
      this.organizador = new Organizador();
  }

}
