import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';

import { User } from '../user';

import { ToastrService } from 'ngx-toastr';

import {ClienteService} from '../../cliente/cliente.service';

import {ClienteDetail} from '../../cliente/cliente-detail';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private clienteService: ClienteService,
        private toastrService: ToastrService
    ) { }

    user: User;

    roles: String[];

    role: string;

    clienteDetail: ClienteDetail;
    /**
    * Logs the user in with the selected role
    */
    login(): void {

        this.getClienteDetailLogin();
        if(this.clienteDetail === null )
        {
            this.toastrService.error('No se econtro un cliente con el login dado');
        }
        else{
            this.authService.login(this.role, this.user.nombre);
            this.toastrService.success('Logged in');
        }

        
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.roles = ['Administrator', 'Client', 'Fotografo','Organizador','Jurado'];
    }

    /**
   * Devuelve el detalle del cliente
   */
  getClienteDetailLogin(): ClienteDetail {

    this.clienteService.getClienteLogin(this.user.nombre)
      .subscribe(clienteDetail => {
        this.clienteDetail = clienteDetail
        console.log ("Para storage" + this.clienteDetail.id);
      });

    return this.clienteDetail;
  }

}
