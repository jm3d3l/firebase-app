import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from '../../models/product.model';
import { ShoppingCart } from '../../models/shoppingCart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent implements OnInit {
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart: ShoppingCart;
  minus = true;
  plus = true;
  constructor(private cartSrv: ShoppingCartService, private router: Router) { }

  addToCart() {
    this.cartSrv.addToCart(this.product);
  }
  removeToCart() {
    this.cartSrv.removeToCart(this.product);
  }
  ngOnInit() {
    let router = this.router.url === '/shopping-cart';
    if (router) {
      this.minus = false;
      this.plus = false;

    }
  }
}
