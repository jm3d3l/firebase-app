import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase-service.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private user: UserService) {
      this.route.url.subscribe(url => {
        console.log(url[0]);
        console.log(url[1]);
     });
      this.auth.user$.subscribe( appUser => {
        if (appUser) {
          /* saving users in database */
        this.user.save(appUser);
         const returnUrl = localStorage.getItem('returnUrl');
         if (returnUrl) {
           localStorage.removeItem('returnUrl');
           this.router.navigateByUrl(returnUrl);
         }
        }
      });
  }
}
