import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCart } from '../../models/shoppingCart';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-action') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;
  constructor(private cartSrv: ShoppingCartService) {
  }

  addToCart() {
    this.cartSrv.addToCart(this.product);
  }
}
