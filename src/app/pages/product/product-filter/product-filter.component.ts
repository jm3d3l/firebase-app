import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  @Input('category') category;
categories;
  constructor(
    private CategorySrv: CategoryService,
  ) {
     this.CategorySrv.globalCategories.subscribe(c => this.categories = c);
   }

  ngOnInit() {
  }

}
