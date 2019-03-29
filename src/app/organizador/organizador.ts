/**
 * This class represents an Organizador of the ConcursoFotografia. 
 * It contains all the information relevant to the Organizador.
 */
export interface Organizador {
    /**
    * The organizador's id
    */
    id: number;

    /**
     * The organizador's name
     */
    name: string;

    /**
     * The organizador's lastname
     */
    lastname: string;

    /**
     * The organizador's phone
     */
    phone: number;
}
