import { Photo } from '../photo/photo';
export class Factura {
  constructor(numero: number, precio: number, fechaCompra: any, photos: Photo[]) {
    this.numero = numero;
    this.precio = precio;
    this.fechaCompra = fechaCompra;
    this.photos = photos;
  }


  /**
  * numero de la factura
  */
  numero: number;
  /**
 * precio de la factura
 */
  precio: number;

  /**
  * fecha de la factura
  */
  fechaCompra: any;

  /**
   * foto que se compro
   */
  photos: Photo[];


}
