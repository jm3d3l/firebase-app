import { BsModalRef } from 'ngx-bootstrap';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCart } from '../../models/shoppingCart';
import { Subscription } from 'rxjs';
import { OrderService } from '../../services/order.service';
import { FirebaseService } from '../../services/firebase-service.service';
import { Order } from '../../models/order.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
    shipping: any = {};
    cart: ShoppingCart;
    cartSubscription: Subscription;
    orderSubscription: Subscription;
    userId: string;

    constructor(
        private router: Router,
        private CartSrv: ShoppingCartService,
        private orderSrv: OrderService,
        private authSrv: FirebaseService) { }
    modalRef: BsModalRef;
    async save() {
        let order = new Order(this.userId, this.shipping, this.cart);
        let result = this.orderSrv.placedOrder(order);
        this.router.navigate(['/order-success/', result.key]);
    }
    async ngOnInit() {
        let cart$ = (await this.CartSrv.getCart());
        this.cartSubscription = cart$.subscribe(data => this.cart = data);
        this.orderSubscription = this.authSrv.user$.subscribe(b => this.userId = b.uid);

    }
    ngOnDestroy() {
        this.cartSubscription.unsubscribe();
        this.orderSubscription.unsubscribe();
    }

}
