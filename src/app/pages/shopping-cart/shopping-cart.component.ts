import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCart } from '../../models/shoppingCart';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input('shopping-cart') shoppingCart: ShoppingCart;
  @Input('product') product: Product;
  cart$;

  constructor(public ShopSrv: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.ShopSrv.getCart();
  }

}
