import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';
import{FormaDePagoDetail} from '../forma-de-pago/forma-de-pago-detail';
import{ClienteDetail} from './cliente-detail';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FacturaDetail } from '../factura/factura-detail';

const API_URL = environment.apiURL;
const clientes = '/clientes';
const formasDePago = '/formasDePago';
const facturas = '/facturas';

@Injectable()
export class ClienteService {

/**
* Constructor of the service
* @param http The HttpClient-This is necessary in order to perform requests
*/

constructor(private http: HttpClient) { }

/**
* Trae la lista de clientes
*/
getClientes() : Observable<Cliente[]> 
{
    return this.http.get<Cliente[]>(API_URL + clientes);
}

/**
* Trae el cliente con un id especifico
* @param clienteId id del cliente
*/
getClientesDetail(clienteId):Observable<ClienteDetail>
{
    return this.http.get<ClienteDetail>(API_URL + clientes + '/'+ clienteId);
}

/**
* Trae el cliente con un login especifico
* @param clienteId id del cliente
*/
getClienteLogin(login):Observable<ClienteDetail>
{
    return this.http.get<ClienteDetail>(API_URL + clientes + '/'+ login);
}

/**
* Creates a cliente
* @param cliente The new client
* @returns The confirmation that the client was created
*/
createCliente(cliente): Observable<Cliente> 
{
    console.log("LLAMADO");
    return this.http.post<Cliente>(API_URL + clientes, cliente);
}

    /**
* Updates a Client
* @param Cliente The client which will be update
* @returns The confirmation of the cliente's update
*/
updateCliente(cliente): Observable<ClienteDetail> 
{
    return this.http.put<ClienteDetail>(API_URL + clientes + '/' + cliente.id, cliente);
}

 /**
  *Eliminar un cliente
  * @param clienteId Id del cliente que se desea eliminar
  */
deleteCliente(clienteId):Observable<ClienteDetail>
{
    return this.http.delete<ClienteDetail>(API_URL + clientes + '/'+ clienteId);
}

/**
 * Trae las formas de pago asociasas a un cliente
 * @param clienteId el id del cliente del cual se quieren consultar las formas de pago
 */
getClienteFormasDePago(clienteId:number): Observable<FormaDePagoDetail[]>
{
    return this.http.get<FormaDePagoDetail[]>(API_URL+ clientes + '/'+ clienteId + formasDePago);
}

/**
 * Trae las facturas asociasas a un cliente
 * @param clienteId el id del cliente del cual se quieren consultar las facturas
 */
getClienteFacturas(clienteId:number): Observable<FacturaDetail[]>
{
    return this.http.get<FacturaDetail[]>(API_URL+ clientes + '/'+ clienteId + facturas);
}

}
