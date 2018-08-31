import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {take, map} from 'rxjs/operators';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$;
  tshirt = {};
  id;
  constructor(
    private productSrv: ProductService,
    private userSrv: UserService,
    private categorySrv: CategoryService,
    private router: Router,
    private route: ActivatedRoute) {
      this.categories$ = this.categorySrv.globalCategories;
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.productSrv.getProduct(this.id).valueChanges().pipe(take(1)).subscribe(  data => {
          this.tshirt = data;
        });
      }
  }
  save(product: NgForm) {
    if (this.id) {
      this.productSrv.updateProduct(this.id, product);
    } else {
       this.productSrv.saveProduct(product);
    }
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }
}
