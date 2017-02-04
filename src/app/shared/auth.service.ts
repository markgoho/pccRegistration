import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {

  currentUser;

  constructor(public af: AngularFire, private auth: FirebaseAuthState) { 
    this.af.auth.subscribe(auth => {
      this.currentUser.uid = auth.uid;
    });
  }


  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }
}
