import { Calificacion } from "./calificacion";

export class Photo {
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

    calificaciones: Calificacion[];
}
