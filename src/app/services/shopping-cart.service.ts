import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { take, map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { ShoppingCart } from '../models/shoppingCart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  itemCount;

  constructor(private afDb: AngularFireDatabase) {

  }
  private create() {
    return this.afDb.list('/shopping-cart').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart(): Promise<Observable<ShoppingCart>> {
    const cartId = await this.getOrCreateCartId();
    return this.afDb.object('/shopping-cart/' + cartId).valueChanges()
      .pipe(map((x: ShoppingCart) => new ShoppingCart(x.items)));
  }

  private getItem(cartId: string, productId: string) {
    return this.afDb.object('/shopping-cart/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId(): Promise<string> {
    const cartId = localStorage.getItem('cartid');
    if (cartId) return cartId;
    const result = await this.create();
    localStorage.setItem('cartid', result.key);
    return result.key;
  }
  async addToCart(product: Product) {
    this.updateItemQuantity(product, 1);
  }
  async removeToCart(product: Product) {
    this.updateItemQuantity(product, -1);
  }

  private async updateItemQuantity(product: Product, change: number) {
    const cartid = await this.getOrCreateCartId();
    const item$ = this.getItem(cartid, product.key);
    item$.snapshotChanges().pipe(take(1)).subscribe(data => {
      let prod: any = {};
      const isProdExist = data.payload.exists();
      prod = data.payload.val();
      if (isProdExist) item$.update({ quantity: prod.quantity + change });
      else item$.set({ product: product, quantity: change });
    });
  }
}
