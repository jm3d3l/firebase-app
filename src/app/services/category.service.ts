import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase-service.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  globalCategories: Observable<any>;
  constructor( private afd: AngularFireDatabase, private fireSrv: FirebaseService) {
   this.globalCategories = this.getAll().snapshotChanges().pipe(map(c => {
      return c.map((change => ({
        key: change.payload.key, ...change.payload.val()
       })));
    }));
   }

  getAll() {
    return this.afd.list('categories', data => data.orderByChild('name'));
  }


}
