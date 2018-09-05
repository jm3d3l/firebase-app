import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent {
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart;
  constructor(private cartSrv: ShoppingCartService) { }

  addToCart() {
    this.cartSrv.addToCart(this.product);
  }
  removeToCart() {
    this.cartSrv.removeToCart(this.product);
  }
}