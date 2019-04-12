import {Photo} from '../photo/photo';
export class Factura {
    /**
    * factura id
    */
   id: number;

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
   fotoComprada: Photo; 
}
