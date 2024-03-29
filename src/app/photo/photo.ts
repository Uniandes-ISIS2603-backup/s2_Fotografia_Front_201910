export class Photo {
    
    constructor(id?: number, nombre?:string, rutaFoto?:string, date?:any, description?: string, price?:number, winner?:boolean, published?:boolean){
        this.id = id;
        this.nombre = nombre;
        this.rutaFoto = rutaFoto;
        this.date = date;
        this.description = description;
        this.price = price;
        this.winner = winner;
        this.published = published;
    }
    /*
    * Atributo correspondiente al id de la foto.
    */
    id: number;

    /*
    * Atributo correspondiente a el nombre de la foto.
    */
    nombre: string;
    /*
     * Atributo correspondiente a la ruta de la foto.
    */
    rutaFoto: string;
    /*
    * Atributo correspondiente a la fecha de la foto.
    */
    date: any;

    /*
    * Atributo correspondiente a la descripcion de la foto.
    */
    description: string;

    /*
     * Atributo correspondiente a el precio de la foto.
     */
    price: number;

    /*
     * Atributo correspondiente a si la foto es ganadora o no.
     */
    winner: boolean;

    /*
     * Atributo correspondiente a si la ha sido publicada o no.
     */
    published: boolean;

    getPrice(){
        return this.price;
    }
    getQty(){
        return 1;
    }
}
