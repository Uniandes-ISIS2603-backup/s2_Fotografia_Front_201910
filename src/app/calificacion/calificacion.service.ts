import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Calificacion } from '../photo/calificacion';
import { CalificacionDetail } from './calificacion-detail';


import { environment } from '../../environments/environment';
const API_URL = 'http://localhost:8080/s2_fotografia-api/api';
const calificaciones = '/calificaciones';

@Injectable()
export class CalificacionService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
    
   /**
   * Returns the Observable object containing the list of Calificaciones retrieved from the API
   * @returns The list of Calificaciones in real time
   */
   getCalificaciones(): Observable<Calificacion[]> {
       return this.http.get<Calificacion[]>(API_URL + calificaciones);
   }
   
   /**
   * Returns the Observable object with the details of an Calificacion retrieved from the API
   * @returns The Calificacion details
   */
   getCalificacionDetail(calificacionId): Observable<CalificacionDetail> {
       return this.http.get<CalificacionDetail>(API_URL + calificaciones + '/' + calificacionId);
   }

   /**
   * Creates an calificacion
   * @param calificacion The calificacion which will be created
   * @returns The confirmation of the calificacion's creation
   */
  createCalificacion(calificacion): Observable<Calificacion> {
   return this.http.post<Calificacion>(API_URL + calificaciones, calificacion);
}

/**
* Updates an calificacion
* @param calificacion The calificacion which will be update
* @returns The confirmation of the calificacion's update
*/
updateCalificacion(calificacion): Observable<CalificacionDetail> {
   return this.http.put<CalificacionDetail>(API_URL + calificaciones + '/' + calificacion.id, calificacion);
}

/**
* Deletes an calificacion
* @param calificacionId The calificacion which will be deleted
* @returns True if the calificacion was deleted, false otherwise
*/
deleteCalificacion(calificacionId): Observable<CalificacionDetail> {
   return this.http.delete<CalificacionDetail>(API_URL + calificaciones + '/' + calificacionId);
}
}
