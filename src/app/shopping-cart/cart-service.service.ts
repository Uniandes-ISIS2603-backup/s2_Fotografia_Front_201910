import {Injectable} from '@angular/core';
import {Photo} from '../photo/photo';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import {of} from 'rxjs/observable/of';import { ShoppingCartComponent } from './shopping-cart.component';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private itemsInCartSubject: BehaviorSubject<Photo[]> = new BehaviorSubject([]);
  private itemsInCart: Photo[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(item: Photo) {
    console.log('log del service add to cart');
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  public getItems(): Observable<Photo[]> {
    return this.itemsInCartSubject.asObservable();
  }
}
