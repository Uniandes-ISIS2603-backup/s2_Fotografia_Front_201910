import { Organizador } from './organizador';
import { Concurso } from '../concurso/concurso';
/**
* This class represents an OrganizadorDetail of the concursoStore. 
* It contains all the information relevant to the Organizador.
*/
export class OrganizadorDetail extends Organizador {


    /**
     * The Organizador's concursos
     */
    concursos: Concurso[];
}