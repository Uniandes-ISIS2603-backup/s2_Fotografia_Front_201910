import {Cliente} from './cliente';
import { FormaDePagoDetail } from '../forma-de-pago/forma-de-pago-detail';
export class ClienteDetail extends Cliente
{

  /**
    * El nombre del cliente
    */
  nombre: string;


  /**
    * El correo del cliente
    */
  correo:string;

/**
 * La contrasena del cliente
 */
  contrasena: string;

  /**
   * Las formas de pago del
   */
  formasDePago:FormaDePagoDetail[];

}