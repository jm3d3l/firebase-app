import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase-service.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { UserService } from './services/user.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  returnURl;
  constructor(
    private auth: FirebaseService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: LocalStorageService,
    private user: UserService) {
  }
  ngOnInit() {
    this.returnURl = this.storage.retrieve('returnUrl');
    console.log(this.router.url);
    this.auth.user$.subscribe(appUser => {
      this.userCheck(appUser);
    });
  }

  private userCheck(user) {
    if (user) {
      this.user.save(user);
      const returnUrl = this.storage.retrieve('returnUrl');
      if (returnUrl) {
        this.storage.clear('returnUrl');
        this.router.navigateByUrl(returnUrl);
      }
    }
  }
}
