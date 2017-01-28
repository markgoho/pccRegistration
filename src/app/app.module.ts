import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StudentComponent,
    ParentsComponent,
    CourseComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig),
    routing
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
