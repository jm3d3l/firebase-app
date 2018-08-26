import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: FirebaseService, private router: Router, private route: ActivatedRoute) { }

  login() {
   let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
   localStorage.setItem('returnUrl' ,returnUrl);
    this.auth.login();
  }
}
