import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product.model';
import { timer } from 'rxjs';


export class ShoppingCart {

  item: ShoppingCartItem[] = [];

  constructor(public items: { [id: string]: ShoppingCartItem }) {
    for (let id in items) {
      let itemer = items[id];
      this.item.push(new ShoppingCartItem({ ...itemer, key: id }));
    }
  }

  itemQuantity(product: Product) {
    if (!this.items) return 0;
    let item = this.items[product.key];
    return item ? item.quantity : 0;
  }

  get totalPrice() {
    let total = 0;
    for (let i = 0; i < this.item.length; i++)
      total += this.item[i].total;
    return total;
  }
  get cartCount() {
    let count = 0;
    for (let prodid in this.items)
      count += this.items[prodid].quantity;
    return count;
  }

}
