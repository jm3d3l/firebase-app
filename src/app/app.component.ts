import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase-service.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { UserService } from './services/user.service';
import { LocalStorageService } from 'ngx-webstorage';

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
    private storage: LocalStorageService,
    private user: UserService) {
      this.auth.user$.subscribe( appUser => {
        if (appUser) {
          /* saving users in database */
        this.user.save(appUser);
         const returnUrl = this.storage.retrieve('returnUrl');
         if (returnUrl) {
           this.storage.clear('returnUrl');
           this.router.navigateByUrl(returnUrl);
         }
        }
      });
  }
}
