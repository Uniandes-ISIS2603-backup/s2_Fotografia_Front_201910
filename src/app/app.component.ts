import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ClienteDetail } from './cliente/cliente-detail';
/**
 * The app component. This component is the base of the Fotografia
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;

    retrievedObject: string = JSON.parse(localStorage.getItem('cliente'));
    loginCliente :string = this.retrievedObject;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "Fotografia";

        if (localStorage == null)
        {
            localStorage.setItem('cliente', JSON.stringify(100));
        }
        this.authService.start();
       this.loginCliente = this.retrievedObject;
        console.log('cliente login : ', (this.retrievedObject));
        console.log('cliente id: ', this.loginCliente);
    }
    
    logout(): void{
        this.authService.logout();
        this.authService.printRole();
        
    }

    /**
     * @ignore
     */
    constructor(private authService: AuthService) 
        {}

        
}