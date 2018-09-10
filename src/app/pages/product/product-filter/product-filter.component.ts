import { Component, OnInit, Input, HostListener } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

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
    private cartSrv: ShoppingCartService,
  ) {
    this.CategorySrv.globalCategories.subscribe(c => this.categories = c);
  }
  async ngOnInit() {
  }
}
