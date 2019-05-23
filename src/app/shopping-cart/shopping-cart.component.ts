// Se importa la anotación utilizada para anotar componentes.
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// Se importa el modelo Item
import {Photo} from '../photo/photo'
import {CartServiceService} from './cart-service.service'
import {Observable, from} from 'rxjs';
import {of} from 'rxjs/observable/of';
import { FacturaService } from '../factura/factura.service';
import { ToastrService } from 'ngx-toastr';
import { Factura } from '../factura/factura';


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
  public shoppingCartItems$: Observable<Photo[]> = of([]);
  invoice: Photo[];
  
  facturaService: FacturaService;
  /**
    * The new factura
    */
   factura: Factura;

     /**
    * The output which tells the parent component
    * that the user no longer wants to create an calificacion
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new calificacion
   */
   @Output() create = new EventEmitter();

  constructor(private cartService: CartServiceService, facturaService: FacturaService, private toastrService: ToastrService) {
    this.shoppingCartItems$ = this
      .cartService
      .getItems();
    this.facturaService = facturaService;
    this.shoppingCartItems$.subscribe(_ => this.invoice = _); 

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
    console.log("delete item method")
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
      total = total + item.price;
    }
    return total;
  }

  checkout(){
    console.log('checkout');
    this.facturaService.createFactura(this.invoice, this.total()).subscribe((factura) => {
      this.factura = factura;
      this.create.emit();
      this.toastrService.success("The factura was created", "factura creation");
  });;
  }
}