import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';
import{ClienteDetail} from './cliente-detail';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const clientes = '/clientes';

@Injectable()
export class ClienteService {

    /**
    * Constructor of the service
    * @param http The HttpClient-This is necessary in order to perform requests
    */

  constructor(private http: HttpClient) { }

   getClientes() : Observable<Cliente[]> {
        return this.http.get<Cliente[]>(API_URL + clientes);
    }

    getClientesDetail(clienteId):Observable<ClienteDetail>
    {
      return this.http.get<ClienteDetail>(API_URL + clientes + '/'+ clienteId);
    }

/**
    * Creates a cliente
    * @param cliente The new client
    * @returns The confirmation that the client was created
    */
    createCliente(cliente): Observable<Cliente> {
        return this.http.post<Cliente>(API_URL + clientes, cliente);
    }

    /**
* Updates a Client
* @param Cliente The client which will be update
* @returns The confirmation of the cliente's update
*/
updateCliente(cliente): Observable<ClienteDetail> {
    return this.http.put<ClienteDetail>(API_URL + clientes + '/' + cliente.id, cliente);
 }
}
