import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {FormaDePago} from './forma-de-pago';
import{FormaDePagoDetail} from './forma-de-pago-detail';
import { environment } from '../../../environments/environment';

const API_URL = environment.apiURL;
const formasDePago = '/formasDePago';



@Injectable()
export class FormaDePagoService {

  constructor(private http:HttpClient) { }

  
   getFormasDePago() : Observable<FormaDePago[]> {
        return this.http.get<FormaDePago[]>(API_URL + formasDePago);
    }

    getFormaDePagoDetail(formaDePagoId):Observable<FormaDePagoDetail>
    {
       return this.http.get<FormaDePagoDetail>(API_URL + formasDePago+ '/' +formaDePagoId);
    }

    /**
* Actualiza una forma de pago
* @param formaDePago La forma de pago a actualizar
* @returns La confirmacion de actualizacion del jurado
*/
updateFormaDePago(formaDePago): Observable<FormaDePago> {
   return this.http.put<FormaDePagoDetail>(API_URL + formasDePago + '/' + formaDePago.id, formaDePago);
}



}