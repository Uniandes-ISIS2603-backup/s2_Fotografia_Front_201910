export class FormaDePago
{
  /**
   * Id de la forma de pago
   */
  id: number;

  /**
   * Numero de la tarjeta
   */
  numeroTarjeta: number;

  /**
   * Tipo de tarjeta (credito o debito)
   */
tipoDeTarjeta: string;

/**
 * Tipo de tarjeta de credito visa o mastercard
 */
  tipoTarjetaDeCredito: string;

  nombre :string;
}