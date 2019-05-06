import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
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

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "Fotografia";
        this.authService.start();
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








