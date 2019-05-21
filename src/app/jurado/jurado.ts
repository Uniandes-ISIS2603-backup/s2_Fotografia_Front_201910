export class Jurado {
    
    constructor(id?:number, nombre?:string, apellido?:number, correo?:string, cedula?:string, pais?:string, ciudad?:string){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.cedula = cedula;
        this.pais = pais;
        this.ciudad = ciudad;
    }
    /**
    * jurado id
    */
    id: number;

    /**
     * nombre
     */
    nombre: string;

    /** apellido
     * 
     */
    apellido: number;
    
    /** correo
     * 
     */
    correo: string;

    /** cedula
     * 
     */
    cedula: string;

    /** pais
     * 
     */
    pais: string;

    /** ciudad
     * 
     */
    ciudad: string;
}