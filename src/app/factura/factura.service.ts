import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Factura } from './factura';
import { FacturaDetail } from './factura-detail';
import { DatePipe } from '@angular/common';



import { environment } from '../../environments/environment';
import { Photo } from '../photo/photo';
const API_URL = 'http://localhost:8080/s2_fotografia-api/api';
const facturas = '/facturas';
const photos = '/photos';


@Injectable()
export class FacturaService {

  factura: Factura;
  /**
   * Constructor of the service
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient, private dp: DatePipe) { }

  /**
  * Returns the Observable object containing the list of facturas retrieved from the API
  * @returns The list of facturas in real time
  */
  getFacturas(): Observable<Factura[]> {
    console.log('hgjskl');
    return this.http.get<Factura[]>(API_URL + facturas);
  }

  /**
  * Returns the Observable object with the details of an factura retrieved from the API
  * @returns The factura details
  */
  getFacturaDetail(facturaId): Observable<FacturaDetail> {
    return this.http.get<FacturaDetail>(API_URL + facturas + '/' + facturaId);
  }

  /**
  * Creates an factura
  * @param factura The factura which will be created
  * @returns The confirmation of the factura's creation
  */
  createFactura(photos: Photo[], total: number): Observable<FacturaDetail> {
    let dateB: Date = new Date();
    this.factura = new Factura(Math.floor((Math.random() * 100000) + 1),total,this.dp.transform(dateB, 'yyyy-MM-dd'),photos); 

    console.log(this.factura);
    console.log(API_URL + facturas);
    return this.http.post<FacturaDetail>(API_URL + facturas, this.factura);
  }

  /**
  * Updates an factura
  * @param factura The factura which will be update
  * @returns The confirmation of the factura's update
  */
  updateFactura(factura): Observable<FacturaDetail> {
    return this.http.put<FacturaDetail>(API_URL + facturas + '/' + factura.id, factura);
  }

  /**
  * Deletes an factura
  * @param facturaId The factura which will be deleted
  * @returns True if the factura was deleted, false otherwise
  */
  deleteFactura(facturaId): Observable<FacturaDetail> {
    return this.http.delete<FacturaDetail>(API_URL + facturas + '/' + facturaId);
  }

  
  getFacturaFoto(photoId: number): Observable<Photo> {
    console.log(API_URL + "foto-" + photoId + ".json");
    return this.http.get<Photo>(API_URL + photos + '/' + photoId);
  }
}
