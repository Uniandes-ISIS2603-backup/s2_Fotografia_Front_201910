import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Organizador} from './organizador';
import {OrganizadorDetail} from './organizador-detail';

//const API_URL = "../../assets/";
//const organizadors = '/organizadors.json';


const API_URL = 'http://localhost:8080/s2_fotografia-api/api';
const organizadors = '/organizadors';


/**
 * The service provider for everything related to organizadors
 */
@Injectable()
export class OrganizadorService {

    /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) {}

    /**
     * Returns the Observable object containing the list of organizadors retrieved from the API
     * @returns The list of organizadors in real time
     */
    getOrganizadors(): Observable<Organizador[]> {
        return this.http.get<Organizador[]>(API_URL + organizadors);
    }

    /**
    * Returns the Observable object with the details of an Organizador retrieved from the API
    * @returns The Organizador details
    */
   getOrganizadorDetail(organizadorId): Observable<OrganizadorDetail> {
    return this.http.get<OrganizadorDetail>(API_URL + organizadors + '/' + organizadorId);
} 
    /**
    * Creates an organizador
    * @param organizador The new organizador
    * @returns The confirmation that the organizador was created
    */
    createOrganizador(organizador): Observable<Organizador> {
        return this.http.post<Organizador>(API_URL + organizadors, organizador);
    }
        /**
    * Updates an organizador
    * @param organizador The aorganizadoruthor's information updated
    * @returns The confirmation that the Organizador was updated
    */
   updateOrganizador(organizador): Observable<OrganizadorDetail> {
    return this.http.put<OrganizadorDetail>(API_URL + organizadors + '/' + organizador.id, organizador);
}
    
}

