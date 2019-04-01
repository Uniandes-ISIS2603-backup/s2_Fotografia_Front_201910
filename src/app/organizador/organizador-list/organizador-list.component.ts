import {Component, OnInit} from '@angular/core';
import {OrganizadorService} from '../organizador.service';
import {Organizador} from '../organizador';

/**
 * The organizador's list component
 */
@Component({
    selector: 'app-organizador',
    templateUrl: './organizador-list.component.html',
    styleUrls: ['./organizador-list.component.css']
})
export class OrganizadorListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param organizadorService The organizador's services provider
     */
    constructor(private organizadorService: OrganizadorService) {}

    /**
     * The list of organizadors which belong to the Fotografia
     */
    organizadors: Organizador[];

    /**
     * Asks the service to update the list of organizadors
     */
    getOrganizadors(): void {
        this.organizadorService.getOrganizadors()
            .subscribe(organizadors => this.organizadors = organizadors);
    }

    /**
     * This will initialize the component by retrieving the list of organizadors from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getOrganizadors();
    }

}
