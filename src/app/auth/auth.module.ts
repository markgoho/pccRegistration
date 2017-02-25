import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent} from './login/login.component';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [ CommonModule, AuthRoutingModule ],
  declarations: [ LoginComponent ],
  providers: [ ]
})
export class AuthModule { }
