import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from '../../../models/shoppingCart';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  cart$;
  constructor(private cartSrv: ShoppingCartService) {

  }
  async ngOnInit() {
    this.cart$ = await this.cartSrv.getCart();
  }
}
