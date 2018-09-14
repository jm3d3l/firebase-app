import { Component, OnInit, Input, HostListener, OnDestroy } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Subscription } from 'rxjs';
import { BehaviorSubjectService } from '../../../services/behavior-subject.service';

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
  subSubcription: Subscription;

  constructor( private CategorySrv: CategoryService, private subSrv: BehaviorSubjectService ) { }
   ngOnInit() {
    this.subcription = this.CategorySrv.globalCategories.subscribe(c => this.categories = c );

  }
  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
