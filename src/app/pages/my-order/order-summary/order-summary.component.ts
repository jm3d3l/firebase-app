import { Component, Input } from '@angular/core';
import { ShoppingCart } from '../../../models/shoppingCart';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent {
  @Input('cart') cart: ShoppingCart;
  constructor() {

  }

}
