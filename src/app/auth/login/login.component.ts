import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFire} from 'angularfire2';

import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(public auth: AuthService, private router: Router, private af: AngularFire) {
  }

  // signInWithGithub(): void {
  //   this.auth.signInWithGithub()
  //     .then(() => this.postSignIn());
  // }

  ngOnInit() {
    if (this.auth.state) { this.router.navigate(['']); }
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  signInWithTwitter(): void {
    this.auth.signInWithTwitter()
      .then(() => this.postSignIn());
  }

  signInWithFacebook(): void {
    this.auth.signInWithFacebook()
      .then(() => this.postSignIn());
  }

  private postSignIn(): void {
    this.af.database.object('/admin').subscribe(admin => {
      if ((admin.$value) === null) {
        let update = {};
        update['/admin'] = {[this.auth.id]: true};
        update[`/parents/${this.auth.id}`] = {'admin': true}
        this.af.database.object('').update(update);
      }
    });
    console.log('logged in!');
    this.router.navigate(['']);
  }

}
