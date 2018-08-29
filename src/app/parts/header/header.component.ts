import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../services/firebase-service.service';
import { UserModel } from '../../models/user-model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 appUser: UserModel;
  constructor(
    private auth: FirebaseService,
     private router: Router,
     private route: ActivatedRoute) {
      this.auth.appUser$.subscribe( user => this.appUser = user);
   }

  ngOnInit() {
  }
  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl' , returnUrl);
     this.auth.login();
   }
  logout() {
        this.auth.logout();
        this.router.navigate(['/']);
  }
}
