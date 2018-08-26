import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
user$: Observable<firebase.User>;
  constructor( public afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState;
   }

login(): void {
  this.afAuth.auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider());
}
logout(): void {
  this.afAuth.auth.signOut();
}
}
