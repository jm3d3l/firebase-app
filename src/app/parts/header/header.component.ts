import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../services/firebase-service.service';
import { UserModel } from '../../models/user-model';
import { LocalStorageService } from 'ngx-webstorage';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCart } from '../../models/shoppingCart';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  appUser: UserModel;
  cartCount: number;
  cart$;
  constructor(
    private auth: FirebaseService,
    public router: Router,
    private route: ActivatedRoute,
    private storage: LocalStorageService,
    private cartSrv: ShoppingCartService) {
  }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    this.storage.store('returnUrl', returnUrl);
    this.auth.login();
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
  clean() {
    this.cartSrv.clearShoppingCart();
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(user => this.appUser = user);
    this.cart$ = await this.cartSrv.getCart();
  }
}
