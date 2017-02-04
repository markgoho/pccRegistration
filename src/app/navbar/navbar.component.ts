import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuthenticated: FirebaseAuthState;
  currentUser;

  constructor(public af: AngularFire) {  }

  ngOnInit() {
    this.af.auth.subscribe(authStatus => {
      this.isAuthenticated = authStatus;
    });
  }

  isAuth() {
    return this.isAuthenticated;
  }

}
