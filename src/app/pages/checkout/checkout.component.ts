import { BsModalRef } from 'ngx-bootstrap';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCart } from '../../models/shoppingCart';
import { Subscription } from 'rxjs';
import { OrderService } from '../../services/order.service';
import { FirebaseService } from '../../services/firebase-service.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
    shipping: any = {};
    cart: ShoppingCart;
    subscription: Subscription;

    userId: string;
    constructor(
        private CartSrv: ShoppingCartService,
        private orderSrv: OrderService,
        private authSrv: FirebaseService) { }
    modalRef: BsModalRef;
    save() {
        let order = {
            // userId: this.userId,
            datePlaced: new Date().getTime(),
            shipping: this.shipping,
            items: this.cart.item.map(x => {
                return {
                    product: {
                        title: x.title,
                        imgurl: x.imgurl,
                        price: x.price
                    },
                    quantity: x.quantity,
                    totalPrice: x.total
                };
            })
        };
        this.orderSrv.addOrder(order);
    }
    async ngOnInit() {
        let cart$ = (await this.CartSrv.getCart());
        this.subscription = cart$.subscribe(data => this.cart = data);
        // this.authSrv.user$.subscribe(user => console.log('user uid', user.uid));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
