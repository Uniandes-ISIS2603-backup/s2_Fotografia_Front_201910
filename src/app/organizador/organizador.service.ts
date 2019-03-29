import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Organizador} from './organizador';

const API_URL = "../../assets/";
const authors = '/authors.json';

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
}
