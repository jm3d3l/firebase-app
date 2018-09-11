import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  googleLogo = 'http://www.iosicongallery.com/icons/google-2015-10-22/512.png';
  constructor(
    private auth: FirebaseService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: LocalStorageService) { }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    this.storage.store('returnUrl', returnUrl);
    this.auth.login();
  }
}
