import{FormaDePago} from './forma-de-pago';
import { Cliente } from '../cliente/cliente';
export class FormaDePagoDetail extends FormaDePago
{
  /**
   * Fecha de vencimiento de la forma de pago
   */
  fechaVencimiento:any;

  /**
   * Numero de verificacion de la forma de pago
   */
  numeroVerificacion: number;

  cliente_id: number;

  foto: string;

  fechaFormato:string;

}