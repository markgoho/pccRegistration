import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { firebaseConfig, authConfig } from '../environments/firebase.config';

import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FirebaseService } from './firebase.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ObservablesComponent } from './observables/observables.component';
import { TypeaheadComponent } from './observables/typeahead/typeahead.component';

// Routing Modules
import { AppRoutingModule } from './app.routing';

// Modules
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ObservablesComponent,
    TypeaheadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig),
    NgbModule.forRoot(),
    AuthModule,
    AppRoutingModule,
  ],
  providers: [FirebaseService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
