import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCart } from '../../models/shoppingCart';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { CheckoutComponent } from '../checkout/checkout.component';
import { FirebaseService } from '../../services/firebase-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input('shopping-cart') shoppingCart: ShoppingCart;
  @Input('product') product: Product;

  modalRef: BsModalRef;

  cart$;
  modalOptions = {
    animated: true,
    backdrop: false
  };

  constructor(private auth: FirebaseService,
    public ShopSrv: ShoppingCartService,
    private router: Router,
    private modal: BsModalService) { }

  checkouts() {
    let user = this.auth.appUser$;
    this.router.navigateByUrl('/check-out');
    if (!user) this.modalRef = this.modal.show(CheckoutComponent, Object.assign({}, { class: 'gray modal-lg' }));
  }
  clean() {
    this.ShopSrv.clearShoppingCart();
  }
  async ngOnInit() {
    this.cart$ = (await this.ShopSrv.getCart());
    // this.cart$.subscribe(data => {
    //   if (data.cartCount === 0)
    //     this.router.navigate(['/']);
    // });
  }

}
