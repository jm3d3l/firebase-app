import { Component, OnInit, TemplateRef, OnDestroy, Output  } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AngularFireList } from 'angularfire2/database';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnDestroy {
  @Output('url') url: string;
  prodId = {};
  products: Product[];
  queryProduct: any[];
  modalRef: BsModalRef;
  productRef: AngularFireList<any>;
  selectedProduct: any = {};
  selected = [];
  subcription: Subscription;
  constructor(
    private productSrv: ProductService,
    private modal: BsModalService,
   ) {
    this.subcription = this.productSrv.globalData.subscribe(p => this.queryProduct = this.products = p);

   }
   search(query: string) {
      this.queryProduct = (query) ? this.products.filter( p =>
      p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
   }
   delete(e: any = {}, temp: TemplateRef<any>) {
    const config = {
      backdrop: true,
      ignoreBackdropClick: true
    };
    this.modalRef = this.modal.show(temp, config);
   }

   deleteItem() {
     this.productSrv.deleteProduct(this.selectedProduct.key);
     this.modalRef.hide();
   }
   decline() {
     this.modalRef.hide();
   }
  onSelect({ selected }) {
    this.selectedProduct.title = this.selected[0].title;
    this.selectedProduct.imgurl = this.selected[0].imgurl;
    this.selectedProduct.key = this.selected[0].key;
  }

   ngOnDestroy() {
     this.subcription.unsubscribe();
   }


}
