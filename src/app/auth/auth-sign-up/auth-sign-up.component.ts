import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';
import { User } from '../user';
import { SessionService } from '../../session.service';

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
        private toastrService: ToastrService,
        private sessionService: SessionService
    ) { }

    user: User;

    roles: String[];

    /**
    * Sign the user up with the selected role
    */
    signUp(): void {
        this.authService.login(this.user.role);
        this.sessionService.setSession(this.user);
        this.toastrService.success('Successfully signed up');
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.roles = ['Administrator', 'Client','Fotografo','Organizador'];
    }

}
