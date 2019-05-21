import {Fotografo} from './fotografo';
import{InteresFotografico} from  '../interes-fotografico/interes-fotografico';
import { Photo } from '../photo/photo';
export class FotografoDetail extends Fotografo
{

  /**
    * El nombre del cliente
    */
  
  id:number;
  
  nombre: string;

  apellido:string;

  foto:string;

  hobbies:string;

  descrip:string;

  pais:string;

  edad:number;

  login:string;
  fechaNacimiento:string;
  telefono:number;

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

  /**
   * fotos del fotografo 
   */

  fotos: Photo[];


  
}