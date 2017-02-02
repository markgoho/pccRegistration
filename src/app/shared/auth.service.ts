import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthService {

  user;

  constructor(public af: AngularFire) { 
    this.af.auth.subscribe(
      data => console.log(data)
    );
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }
}
