/**
 * This class represents an Organizador of the ConcursoFotografia. 
 * It contains all the information relevant to the Organizador.
 */
export class Organizador {
    
    constructor(id?:number, nombre?:string, apellido?:string, telefono?:number, foto?:string){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.foto = foto;
    }
    /**
    * The organizador's id
    */
    id: number;

    /**
     * The organizador's name
     */
    nombre: string;

    /**
     * The organizador's lastname
     */
    apellido: string;

    /**
     * The organizador's phone
     */
    telefono: number;
     /**
     * The organizador's foto
     */
    foto: string;
}
