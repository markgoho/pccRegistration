import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(public auth: AuthService, private router: Router) {
  }

  // signInWithGithub(): void {
  //   this.auth.signInWithGithub()
  //     .then(() => this.postSignIn());
  // }

  ngOnInit() {
    if (this.auth.state) { this.router.navigate(['/parents']); }
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
    this.router.navigate(['/parents']);
  }

}
