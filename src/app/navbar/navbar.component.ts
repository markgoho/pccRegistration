import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  auth: FirebaseAuthState;
  currentUser;

  constructor(public af: AngularFire) {  }

  ngOnInit() {
    this.af.auth.subscribe(authStatus => {
      this.auth = authStatus;
    });
  }

  isAuth() {
    return this.auth;
  }

}
