import { Component, OnInit, TemplateRef  } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AngularFireList } from 'angularfire2/database';
import { UserService } from '../../services/user.service';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PromptComponent } from '../../modal/prompt/prompt.component';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  prodId = {};
  products$;
  modalRef: BsModalRef;
  modalRe2: BsModalRef;
  productRef: AngularFireList<any>;
  constructor(
    private productSrv: ProductService,
    private userSrv: UserService,
    private modal: BsModalService
   ) {
   }

  //  delete(e: any = {}, temp: TemplateRef<any>) {
  //   const id = e.key;
  //   this.modalRef = this.modal.show(temp);
  //  }
   delete(e: any = {}) {
    const id = e.key;
    this.modalRe2 = this.modal.show(PromptComponent);
   }
  ngOnInit() {

  }

}
