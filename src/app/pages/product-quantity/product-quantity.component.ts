import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from '../../models/product.model';
import { ShoppingCart } from '../../models/shoppingCart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent {
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart: ShoppingCart;
  minus;
  plus;
  constructor(private cartSrv: ShoppingCartService, private router: Router) { }

  addToCart() {
    this.cartSrv.addToCart(this.product);
  }
  removeToCart() {
    this.minus = (this.router.url === '/shopping-cart' ? 'circle' : 'square');
    this.plus = (this.router.url === '/shopping-cart' ? 'circle' : 'square');
    this.cartSrv.removeToCart(this.product);
  }
}
