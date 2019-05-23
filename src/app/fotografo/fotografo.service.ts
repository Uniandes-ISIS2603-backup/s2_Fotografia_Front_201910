import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Fotografo } from './fotografo';
import { FotografoDetail } from './fotografo-detail';
import {InteresFotograficoDetail} from '../interes-fotografico/interes-fotografico-detail';
import { PhotoDetail } from '../photo/photo-detail';

 import { environment } from '../../environments/environment';
import { InteresFotografico } from '../interes-fotografico/interes-fotografico';
const API_URL = 'http://localhost:8080/s2_fotografia-api/api';
const fotografos = '/Fotografos';
const intereses = '/InteresFotograficos';

@Injectable()
export class FotografoService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
    
   /**
   * Returns the Observable object containing the list of fotografos retrieved from the API
   * @returns The list of fotografos in real time
   */
   getFotografos(): Observable<Fotografo[]> {
       return this.http.get<Fotografo[]>(API_URL + fotografos);
   }
   
   /**
   * Returns the Observable object with the details of an Fotografo retrieved from the API
   * @returns The Fotografo details
   */
   getFotografoDetail(fotografoId): Observable<FotografoDetail> {
       return this.http.get<FotografoDetail>(API_URL + fotografos + '/' + fotografoId);
   }

   /**
   * Creates an Fotografo
   * @param Fotografo The Fotografo which will be created
   * @returns The confirmation of the Fotografo's creation
   */
  createFotografo(fotografo): Observable<Fotografo> {
   return this.http.post<Fotografo>(API_URL + fotografos, fotografo);
}

/**
* Updates an Fotografo
* @param Fotografo The Fotografo which will be update
* @returns The confirmation of the Fotografo's update
*/
updateFotografo(fotografo): Observable<FotografoDetail> {
   return this.http.put<FotografoDetail>(API_URL + fotografos + '/' + fotografo.id, fotografo);
}

/**
* Deletes an Fotografo
* @param FotografoId The Fotografo which will be deleted
* @returns True if the Fotografo was deleted, false otherwise
*/
deleteFotografo(fotografoId): Observable<FotografoDetail> {
   return this.http.delete<FotografoDetail>(API_URL + fotografos + '/' + fotografoId);
}
getIntereses(interesId: number): Observable<InteresFotografico> {
   console.log(API_URL + "in-" + interesId + ".json");
   return this.http.get<InteresFotografico>(API_URL + "historia-" + interesId + ".json");
 }
 getFotografoInteresesFotograficos(Id:number): Observable<InteresFotograficoDetail[]>{
   return this.http.get<InteresFotograficoDetail[]>(API_URL+ fotografos + '/'+ Id + intereses   );
 }
 
 postPhoto(fotografo, foto): Observable<PhotoDetail>{
     return this.http.post<PhotoDetail>(API_URL+ fotografos + '/'+ fotografo.id + '/photos/' + foto.id, null);
 }
}