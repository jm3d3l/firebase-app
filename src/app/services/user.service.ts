import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireObject} from 'angularfire2/database';
import { AngularFireStorage  } from 'angularfire2/storage';
import * as firebase from 'firebase';
import { UserModel } from '../models/user-model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private globalID = new Subject<any>();
  prodId = this.globalID.asObservable();
  constructor(
     private db: AngularFireDatabase,
     private afStorage: AngularFireStorage ) { }

  /* saving data to firebase */
  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }
  get(uid: string): AngularFireObject<UserModel> {
      return this.db.object('/users/' + uid);
  }
  newGLobalId(id) {
    this.globalID.next(id);
  }

}
