import { Component, OnInit, OnDestroy, HostListener, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Subscription, Observable } from 'rxjs';
import { WindowRef } from '../../windowRef/window.provider';
import { ShoppingCart } from '../../models/shoppingCart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  filteredProduct: Product[] = [];
  subscription: Subscription;
  category: string;
  cart: any;
  constructor(private productSrv: ProductService,
    private route: ActivatedRoute,
    private cartSrv: ShoppingCartService) {
  }
  private filteredProducts(): void {
    this.filteredProduct = (this.category) ?
      this.products.filter(prod => prod.category === this.category) :
      this.products;
  }
  private productRock() {
    this.productSrv.globalData.pipe(switchMap(data => {
      this.products = data;
      return this.route.queryParamMap;
    }))
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts();
      });
  }
  async ngOnInit() {
    this.subscription = (await this.cartSrv.getCart()).subscribe(cart => this.cart = cart);
    this.productRock();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();

  }
}
