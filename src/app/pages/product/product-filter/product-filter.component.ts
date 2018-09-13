import { Component, OnInit, Input, HostListener, OnDestroy } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit, OnDestroy {
  @Input('category') category;
  screenWidth: number;
  categories;
  medium: boolean;
  subcription: Subscription;
@HostListener('window:resize', ['$event']) onResize(event?) {
  this.screenWidth = window.innerWidth;
  this.medium = (this.screenWidth > 768 ? true : false);
}
  constructor( private CategorySrv: CategoryService ) { }
  async ngOnInit() {
    this.subcription = this.CategorySrv.globalCategories.subscribe(c => this.categories = c );
  }
  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
