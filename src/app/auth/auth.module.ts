import {LoginComponent} from './login/login.component';
import {AuthService} from '../shared/auth.service';
import {AuthGuard} from './auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuard,
  ]
})
export class AuthModule {

}