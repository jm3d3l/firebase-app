import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable , of } from 'rxjs';
import { UserModel } from '../models/user-model';
import { UserService } from './user.service';
import { switchMap } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
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


}
