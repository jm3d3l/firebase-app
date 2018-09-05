import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable , of } from 'rxjs';
import { UserModel } from '../models/user-model';
import { UserService } from './user.service';
import { switchMap, map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

user$: Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth,
    private afdb: AngularFireDatabase,
    public userSrv: UserService) {
    this.user$ = this.afAuth.authState;
   }

  login(): void {
    this.afAuth.auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider());
  }
  logout(): void {
    this.afAuth.auth.signOut();
  }

get appUser$(): Observable<UserModel>  {
  return this.user$.pipe(switchMap(user => {
    if (user) {
      return this.userSrv.get(user.uid).valueChanges();
    } else {
      return of(null);
    }
  }));
 }

 objectKey(valuekey: AngularFireList<{}>): Observable<any> {
  return  valuekey.snapshotChanges().pipe(map( changes => {
      return changes.map((c => ({
        key: c.payload.key, ...c.payload.val()
      })));
    }));
 }

 fetchChild(name: any, childName: any): AngularFireList<any> {
   return this.afdb.list(name, data => data.orderByChild(childName));
 }

}
