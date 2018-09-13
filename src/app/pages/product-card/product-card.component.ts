import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCart } from '../../models/shoppingCart';
import { trigger, transition, stagger, style, animate } from '@angular/animations';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  animations: [
    trigger('list', [
      transition('void => *', [
      animate('1s ease-in', style({opacity: 1}))
    ])
    ])
  ]
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
