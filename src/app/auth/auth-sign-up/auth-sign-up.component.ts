import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';
import { User } from '../user';
import { Fotografo } from '../../fotografo/fotografo';
import { Organizador } from '../../organizador/organizador';
import { Cliente } from '../../cliente/cliente';
import { Jurado } from '../../jurado/jurado';
@Component({
    selector: 'app-auth-sign-up',
    templateUrl: './auth-sign-up.component.html',
    styleUrls: ['./auth-sign-up.component.css']
})
export class AuthSignUpComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService
    ) { }

    user: User;

    roles: String[];

    role: string;
    
    bshowFotografo: boolean;
    
    bshowCliente: boolean;
    
    bshowOrganizador: boolean;
    
    bshowJurado: boolean;
    
    showFotografo(): void {
        this.bshowFotografo = !this.bshowFotografo;
        this.bshowCliente = false;
        this.bshowJurado = false;
        this.bshowOrganizador = false;
    }
    
    showJurado(): void {
        this.bshowJurado = !this.bshowJurado;
        this.bshowFotografo = false;
        this.bshowCliente = false;
        this.bshowOrganizador = false;
    }
    
    showOrganizador(): void {
        this.bshowOrganizador = !this.bshowOrganizador;
        this.bshowFotografo = false;
        this.bshowCliente = false;
        this.bshowJurado = false;
    }
    
    showCliente(): void{
        this.bshowCliente = !this.bshowCliente;
        this.bshowFotografo = false;
        this.bshowOrganizador = false;
        this.bshowJurado = false;
    }
    
    createAdministrador(): void{
        this.authService.login('Administrador', null);
    }
    /**
    * Sign the user up with the selected role
    */
    signUp(usuario: Fotografo | Organizador | Cliente | Jurado ): void {
        if(usuario instanceof Cliente){
            this.authService.signUp('Client', usuario);

        }
        else if(usuario instanceof Fotografo){
            this.authService.signUp('Fotografo', usuario);

        }
        else if(usuario instanceof Jurado){
            this.authService.signUp('Jurado', usuario)
         
        }
        else if(usuario instanceof Organizador){
            this.authService.signUp('Organizador', usuario)
        
        }
        this.toastrService.success('Successfully signed up');
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.bshowFotografo = false;
        this.bshowCliente = false;
        this.bshowJurado = false;
        this.bshowOrganizador = false;
        this.roles = ['Administrator', 'Client','Fotografo','Organizador', 'Jurado'];
        
    }

}
