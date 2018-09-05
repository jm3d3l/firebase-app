import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product.model';


export class ShoppingCart {
  item: ShoppingCartItem[] = [];
  constructor(public items: { [prodid: string]: ShoppingCartItem }) {
    for (let itemID in items) {
      let itemer = items[itemID];
      this.item.push(new ShoppingCartItem(itemer.product, itemer.quantity));
    }
  }

  itemQuantity(product: Product) {
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
