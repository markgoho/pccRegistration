import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { firebaseConfig, authConfig } from '../environments/firebase.config';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home.component';
import { routing } from './app.routing';
import { StudentComponent } from './student/student.component';
import { ParentsComponent } from './parents/parents.component';
import { CourseComponent } from './course/course.component';
import { FirebaseService } from './firebase.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { ParentDetailComponent } from './parent/parent-detail/parent-detail.component';
import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { EmailComponent } from './auth/email/email.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
import { ObservablesComponent } from './observables/observables.component';
import { TypeaheadComponent } from './observables/typeahead/typeahead.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StudentComponent,
    ParentsComponent,
    CourseComponent,
    PageNotFoundComponent,
    SigninComponent,
    ParentDetailComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    ObservablesComponent,
    TypeaheadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig),
    NgbModule.forRoot(),
    routing,
  ],
  providers: [FirebaseService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
