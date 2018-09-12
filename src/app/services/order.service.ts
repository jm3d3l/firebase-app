import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase, private cartSrv: ShoppingCartService) { }

  placedOrder(order) {
    let result = this.db.list('/orders').push(order);
    this.cartSrv.clearShoppingCart();
    return result;
  }
}
