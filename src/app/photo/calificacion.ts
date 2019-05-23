import {Photo} from './photo';
import { Cliente } from '../cliente/cliente';

export class Calificacion {
    /**
    * Calificacion id
    */
    id: number;

    /**
     * Comentario
     */
    comentario: string;

    /** Puntaje
     * 
     */
    puntaje: number;

    /**
     * Photo
     */
    photo: Photo;

    clienteCalificador: Cliente;
    
}
