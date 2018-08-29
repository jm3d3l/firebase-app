import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FirebaseService } from '../services/firebase-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user;
  constructor(public auth: FirebaseService, public router: Router) {
  }
  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   return   this.auth.user$.pipe(map(user => {
     if (user) {
       return true;
     } else {
       this.router.navigate(['/login'], {queryParams: {returnUrl : state.url}} );
       return false;
     }
   }));
  }
}
