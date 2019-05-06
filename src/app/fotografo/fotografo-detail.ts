import {Fotografo} from './fotografo';
import{InteresFotografico} from  '../interes-fotografico/interes-fotografico';
export class FotografoDetail extends Fotografo
{

  /**
    * El nombre del cliente
    */
  name: string;


  /**
    * El correo del cliente
    */
  correo:string;

/**
 * La contrasena del cliente
 */
  password: string;

  /**
   * intereses fotograficos
   */
  intereses:InteresFotografico
  
}