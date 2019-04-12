import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {FormaDePago} from './forma-de-pago';
import{FormaDePagoDetail} from './forma-de-pago-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const formasDePago = '/formasDePago';
const clientes = '/clientes';



@Injectable()
export class FormaDePagoService {

   /**
    * Constructor del servicio
    * @param http 
    */
  constructor(private http:HttpClient) { }

  /**
   * Trae las formas de pago
   */
   getFormasDePago() : Observable<FormaDePago[]> {
        return this.http.get<FormaDePago[]>(API_URL + formasDePago);
    }

    /**
     * Trae el detalle de una forma de pago en especifico
     * @param formaDePagoId 
     */
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

/**
    * Creates a forma de pago
    * @param formaDePago The new forma de pago
    * @returns The confirmation that the forma de pago was created
    */
   createFormaDePago(formaDePago): Observable<FormaDePagoDetail> {
      return this.http.post<FormaDePagoDetail>(API_URL + formasDePago, formaDePago);
  }

/**
 * Trae las formas de pago de un cliente
 * @param idCliente 
 */
getFormasDePagoCliente(idCliente: number): Observable<FormaDePago>
{
   return this.http.get<FormaDePago>(API_URL+ clientes + '/'+ idCliente + formasDePago   );
}


}