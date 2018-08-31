import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent  {
@Input('product') product: Product;

@Input('show-action') showActions = true;



  constructor() { }

  addToCart(product: Product) {
    console.log('its working baby');
  }

}
