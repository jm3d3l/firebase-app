import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import {Product} from '../models/product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FirebaseService } from './firebase-service.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  globalData: Observable<any[]>;
  constructor(public db: AngularFireDatabase, private fireSrv: FirebaseService) {
    this.globalData  = this.fireSrv.objectKey(this.getAll());
   }

  saveProduct(product) {
   return this.db.list('/products').push(product);
  }
  getAll() {
   return this.db.list('products');
  }
  getProduct(prodId): AngularFireObject<Product> {
    return this.db.object('/products/' + prodId);
  }
  updateProduct(prodid, product) {
    return this.db.object('/products/' + prodid).update(product);
  }
  deleteProduct(prodid) {
    return this.db.object('/products/' + prodid).remove();
  }
}
