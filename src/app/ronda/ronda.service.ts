import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Ronda } from './ronda';
import { RondaDetail } from './ronda-detail';

//const API_URL = "../../assets/";
import { environment } from '../../environments/environment';
const API_URL = 'http://localhost:8080/s2_fotografia-api/api';
const rondas = '/rondas';

@Injectable()
export class RondaService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
    
   /**
   * Returns the Observable object containing the list of rondas retrieved from the API
   * @returns The list of rondas in real time
   */
   getRondas(): Observable<Ronda[]> {
       return this.http.get<Ronda[]>(API_URL + rondas);
   }
   
   /**
   * Returns the Observable object with the details of an ronda retrieved from the API
   * @returns The ronda details
   */
   getRondaDetail(rondaId): Observable<RondaDetail> {
       return this.http.get<RondaDetail>(API_URL + rondas + '/' + rondaId);
   }

   /**
   * Creates an ronda
   * @param ronda The ronda which will be created
   * @returns The confirmation of the ronda's creation
   */
  createRonda(ronda): Observable<Ronda> {
   return this.http.post<Ronda>(API_URL + rondas, ronda);
}

/**
* Updates an ronda
* @param ronda The Ronda which will be update
* @returns The confirmation of the Ronda's update
*/
updateRonda(ronda): Observable<RondaDetail> {
   return this.http.put<RondaDetail>(API_URL + rondas + '/' + ronda.id, ronda);
}

/**
* Deletes an ronda
* @param rondaId The ronda which will be deleted
* @returns True if the ronda was deleted, false otherwise
*/
deleteRonda(rondaId): Observable<RondaDetail> {
   return this.http.delete<RondaDetail>(API_URL + rondas + '/' + rondaId);
}
}
