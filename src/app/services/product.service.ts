import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import {Product} from '../models/product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  globalData: Observable<any[]>;
  constructor(public db: AngularFireDatabase) {
    const prodid = this.getAll();
    this.globalData  = prodid.snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
       }));
    }));
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
