import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { InteresFotografico } from './interes-fotografico';
import { InteresFotograficoDetail } from './interes-fotografico-detail';


 import { environment } from '../../environments/environment';
const API_URL = 'http://localhost:8080/s2_fotografia-api/api';
const interesFotograficos = '/InteresFotograficos';

@Injectable()
export class InteresFotograficoService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
    
   /**
   * Returns the Observable object containing the list of interes-fotograficos retrieved from the API
   * @returns The list of interes-fotograficos in real time
   */
   getInteresFotograficos(): Observable<InteresFotografico[]> {
       return this.http.get<InteresFotografico[]>(API_URL + interesFotograficos);
   }
   
   /**
   * Returns the Observable object with the details of an InteresFotografico retrieved from the API
   * @returns The InteresFotografico details
   */
   getInteresFotograficoDetail(interesFotograficoId): Observable<InteresFotograficoDetail> {
       return this.http.get<InteresFotograficoDetail>(API_URL + interesFotograficos + '/' + interesFotograficoId);
   }

   /**
   * Creates an InteresFotografico
   * @param InteresFotografico The InteresFotografico which will be created
   * @returns The confirmation of the InteresFotografico's creation
   */
  createInteresFotografico(interesFotografico): Observable<InteresFotografico> {
   return this.http.post<InteresFotografico>(API_URL + interesFotograficos, interesFotografico);
}

/**
* Updates an InteresFotografico
* @param InteresFotografico The InteresFotografico which will be update
* @returns The confirmation of the InteresFotografico's update
*/
updateInteresFotografico(interesFotografico): Observable<InteresFotograficoDetail> {
   return this.http.put<InteresFotograficoDetail>(API_URL + interesFotograficos + '/' + interesFotografico.id, interesFotografico);
}

/**
* Deletes an InteresFotografico
* @param InteresFotograficoId The InteresFotografico which will be deleted
* @returns True if the InteresFotografico was deleted, false otherwise
*/
deleteInteresFotografico(interesFotograficoId): Observable<InteresFotograficoDetail> {
   return this.http.delete<InteresFotograficoDetail>(API_URL + interesFotograficos + '/' + interesFotograficoId);
}

}