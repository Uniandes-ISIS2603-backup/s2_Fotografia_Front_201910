import{FormaDePago} from './forma-de-pago';
export class FormaDePagoDetail extends FormaDePago
{
  fechaVencimiento:Date;
  numeroVerificacion: number;
  tipoTarjetaDeCredito: string;

}