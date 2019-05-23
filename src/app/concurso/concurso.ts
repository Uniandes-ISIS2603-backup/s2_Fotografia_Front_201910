import {Organizador} from '../organizador/organizador';
import { Ronda } from '../ronda/ronda';
/**
 * Clase  del concurso
 */
export class Concurso {
    
        id: number;
        
        tema: string;
        
        restricciones: string;
        
        edadDeLaFoto: number;
        
        maxFotos: number;
        
        premioCantidad: number;
        
        fechaDelConcurso: any;
            
        ronda: Ronda;
        
        organizador: Organizador;
}
