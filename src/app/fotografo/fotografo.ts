export class Fotografo{
   
    constructor(nombre?:string, apellido?:string, fechaNacimiento?:string, edad?:number, correo?:string, telefono?:number, pais?:string, id?:number, login?:string, password?:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
        this.correo = correo;
        this.telefono = telefono;
        this.pais = pais;
        this.id = id;
        this.login = login;
        this.password = password;
    };
    
    /**
     * nombre fotografo
     */
    nombre:string;
    /**
     * apellido 
     */
    apellido:string;
    /**
     * fecha nacimiento
     */
    fechaNacimiento:string;;
    /**
     * edad
     */
    edad:number;
    /**
     * correo fotografo
     */
    correo:string;
    /**
     * numero telefonico fotografo
     */
    telefono:number;
    /**
     * pais fotografo */ 
    pais:string;
    /**
     * id fotografo
     */
    id:number;
    /**
     * login */
    login:string;
    /**
     * contraseña 
     */
    password:string;
    /**
     * foto
     */
    foto:string;
}