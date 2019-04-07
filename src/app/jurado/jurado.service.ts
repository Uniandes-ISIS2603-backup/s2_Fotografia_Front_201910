import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Jurado } from './jurado';
import { JuradoDetail } from './jurado-detail';


import { environment } from '../../environments/environment';
const API_URL = 'http://localhost:8080/s2_fotografia-api/api';
const jurados = '/jurados';

@Injectable()
export class JuradoService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
    
   /**
   * Returns the Observable object containing the list of jurados retrieved from the API
   * @returns The list of jurados in real time
   */
   getJurados(): Observable<Jurado[]> {
       return this.http.get<Jurado[]>(API_URL + jurados);
   }
   
   /**
   * Returns the Observable object with the details of an Jurado retrieved from the API
   * @returns The Jurado details
   */
   getJuradoDetail(juradoId): Observable<JuradoDetail> {
       return this.http.get<JuradoDetail>(API_URL + jurados + '/' + juradoId);
   }

   /**
   * Creates an Jurado
   * @param Jurado The Jurado which will be created
   * @returns The confirmation of the Jurado's creation
   */
  createJurado(jurado): Observable<Jurado> {
   return this.http.post<Jurado>(API_URL + jurados, jurado);
}

/**
* Updates an Jurado
* @param Jurado The Jurado which will be update
* @returns The confirmation of the Jurado's update
*/
updateJurado(jurado): Observable<JuradoDetail> {
   return this.http.put<JuradoDetail>(API_URL + jurados + '/' + jurado.id, jurado);
}

/**
* Deletes an Jurado
* @param JuradoId The Jurado which will be deleted
* @returns True if the Jurado was deleted, false otherwise
*/
deleteJurado(juradoId): Observable<JuradoDetail> {
   return this.http.delete<JuradoDetail>(API_URL + jurados + '/' + juradoId);
}
}
