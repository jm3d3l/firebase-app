import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {
  products: Product[] = [];
  filteredProduct: Product[] = [];
  category: string;
  constructor( private productSrv: ProductService, route: ActivatedRoute) {
        this.productSrv.globalData.pipe( switchMap( data => {
        this.products = data;
        return route.queryParamMap;
      }))
      .subscribe( params => {
        this.category = params.get('category');
        this.filteredProduct = (this.category) ?
        this.products.filter( prod => prod.category === this.category) :
        this.products;
      });
   }

  

}
