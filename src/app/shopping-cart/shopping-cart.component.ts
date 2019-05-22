// Se importa la anotación utilizada para anotar componentes.
import {Component} from '@angular/core'
// Se importa el modelo Item
import {Photo} from '../photo/photo'

// Declarar el componente utilizando @Component, definiendo el selector del
// componente para ser reutilizado dentro del HTML y la ubicación del template.
@Component({
  selector: 'shoppingCart-component',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent {
  // En TS las variables se pueden definir con un tipo. En este caso se está
  // declarando que invoice es una variable de tipo Object con un único atributo
  // llamado items, que es un array de Object. Donde cada elemento de ese array
  // tiene 3 atributos, un string, y dos number. Acá solo se está definiendo
  // el tipo, no se está inicializando.
  invoice: Photo[];
  
  constructor() {
    // Se inicializa la variable invoice, con un primer item de ejemplo.
    this.invoice = [];
    var item = new Photo();
    this.invoice.push(item);
  }
  
  /**
   * Función para agregar un nuevo elemento a la lista de la factura.
   */
  addItem(): void {
     var item = new Photo();
    this.invoice.push(item);
  }
  
  /**
   * Función para eliminar un elemento de la factura.
   * @param index El índice del elemento a eliminar
   */
  deleteItem(index): void {
    this.invoice.splice(index, 1);
  }
  
  /**
   * Función para calcular el precio total de un elemento.
   * @param item El elemento del cual se quiere calcular el precio.
   * @returns El precio total del elemento.
   */
  subTotal(item): number {
    return item.qty * item.price;
  }
  
  /**
   * Función para calcular el precio total de la factura.
   * @returns El precio total de la factura.
   */
  total(): number {
    let total = 0;
    for (const item of this.invoice) {
      total = total + (item.getQty() * item.getPrice());
    }
    return total;
  }
}