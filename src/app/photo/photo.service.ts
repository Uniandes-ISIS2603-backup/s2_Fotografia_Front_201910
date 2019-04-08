import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Photo} from './photo';

const API_URL = "../../assets/";
const editorials = '/organizador.json';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) {}

   /**
   * Returns the Observable object containing the list of editorials retrieved from the API
   * @returns The list of books in real time
   */
   getPhotos(): Observable<Photo[]> {
       return this.http.get<Photo[]>(API_URL + editorials);
   }
}
