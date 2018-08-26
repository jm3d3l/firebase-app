import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase-service.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (
    private auth: FirebaseService, 
    private router: Router,
    private user: UserService) {
      this.auth.user$.subscribe( user => {
        if(user) {
          this.user.save(user);
         let returnUrl = localStorage.getItem('returnUrl');
         this.router.navigateByUrl(returnUrl);
        }
      })
  }
}
