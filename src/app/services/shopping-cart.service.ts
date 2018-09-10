import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { take, map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { ShoppingCart } from '../models/shoppingCart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  itemCount;

  constructor(private afDb: AngularFireDatabase) { }
  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartItem = await this.getCart$();
    return cartItem.valueChanges().pipe(map(x => new ShoppingCart(x.items)));
  }
  async clearShoppingCart() {
    let b = await this.getOrCreateCartId();
    this.afDb.object('/shopping-cart/' + b + '/items').remove();
  }
  async addToCart(product: Product) {
    this.updateItem(product, 1);
  }
  async removeToCart(product: Product) {
    this.updateItem(product, -1);
  }
  private async getCart$(): Promise<AngularFireObject<ShoppingCart>> {
    const cartId = await this.getOrCreateCartId();
    return this.afDb.object('/shopping-cart/' + cartId);
  }
  private getItem(cartId: string, productId: string) {
    return this.afDb.object('/shopping-cart/' + cartId + '/items/' + productId);
  }
  private create() {
    return this.afDb.list('/shopping-cart').push({
      dateCreated: new Date().getTime()
    });
  }
  private async getOrCreateCartId(): Promise<string> {
    const cartId = localStorage.getItem('cartid');
    if (cartId) return cartId;
    const result = await this.create();
    localStorage.setItem('cartid', result.key);
    return result.key;
  }
  private async updateItem(product: Product, change: number) {
    const cartid = await this.getOrCreateCartId();
    const item$ = this.getItem(cartid, product.key);
    item$
      .snapshotChanges()
      .pipe(take(1))
      .subscribe(data => {
        let prod: any = {};
        const isProdExist = data.payload.exists();
        prod = data.payload.val();
        if (isProdExist) {
          item$.update({ quantity: prod.quantity + change });
          let quantity = prod.quantity + change;
          if (quantity === 0) item$.remove();
        } else
          item$.update({
            title: product.title,
            imgurl: product.imgurl,
            price: product.price,
            quantity: change
          });
      });
  }
}
