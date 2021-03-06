import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProviders, AngularFireAuth, FirebaseAuthState } from 'angularfire2';
import UserInfo = firebase.UserInfo;

@Injectable()
export class AuthService {

  private _authState: FirebaseAuthState;
  private _userInfo: UserInfo;

  constructor(public auth$: AngularFireAuth, private router: Router) { 
    this._authState = null;
    this._userInfo = null;

    let that = this;
    auth$.subscribe((state: FirebaseAuthState) => {
      this._authState = state;

      if (this.authState !== null) {
        switch (state.provider) {
          case AuthProviders.Google:
            that._userInfo = state.google;
            break;
          
          case AuthProviders.Facebook:
            that._userInfo = state.facebook;
            break;

          case AuthProviders.Twitter:
            that._userInfo = state.twitter;
            break;

          case AuthProviders.Github:
            that._userInfo = state.github;
            break;
        }
      }
    });
  }

  get authState(): FirebaseAuthState {
    return this._authState;
  }

  set authState(value: FirebaseAuthState) {
    this._authState = value;
  }

  get userInfo(): UserInfo {
    return this._userInfo;
  }

  set userInfo(value: UserInfo) {
    this._userInfo = value;
  }

  get authenticated(): boolean {
    return this._authState !== null;
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  get state(): FirebaseAuthState|null {
    return this.authenticated ? this.authState : null;
  }

  signIn(provider: number): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({provider})
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  signInWithGithub(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Github);
  }

  signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Google);
  }

  signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Facebook);
  }

  signInWithTwitter(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Twitter);
  }

  signOut(): void {
    this.auth$.logout();
    this.router.navigate(['']);
  }

}
