import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase-service.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  globalCategories;
  constructor( private afd: AngularFireDatabase, private fireSrv: FirebaseService) {

    this.globalCategories = this.fireSrv.objectKey(this.getAll());

   }

  getAll() {
    return this.fireSrv.fetchChild('categories', 'name');
  }


}
