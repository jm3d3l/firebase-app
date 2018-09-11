import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cart$;
  constructor(private CartSrv: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.CartSrv.getCart();
  }

}
