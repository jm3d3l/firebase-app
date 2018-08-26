import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of,from} from 'rxjs';
import { FirebaseService } from '../services/firebase-service.service';
import { UserService } from '../services/user.service';
import { switchMap, map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth: FirebaseService, private userSrv: UserService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
          let rock = this.auth.user$;
          return from(rock)
          .pipe(switchMap(user => this.userSrv.get(user.uid)
          .valueChanges()),
          map(data => data.isAdmin))
  }
}
