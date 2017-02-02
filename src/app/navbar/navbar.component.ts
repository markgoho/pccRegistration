import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuthenticated;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(
      authStatus => this.isAuthenticated = authStatus
    );
  }

  ngOnInit() {
  }

  isAuth() {
    return this.isAuthenticated;
  }

}
