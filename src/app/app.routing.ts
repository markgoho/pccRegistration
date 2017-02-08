import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home.component';
import { StudentComponent } from './student/student.component';
import { ParentsComponent } from './parents/parents.component';
import { CourseComponent } from './course/course.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { ParentDetailComponent } from './parent/parent-detail/parent-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth-guard.service';
import { SignupComponent } from './auth/signup/signup.component';
import { EmailComponent } from './auth/email/email.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'students', component: StudentComponent },
  { path: 'parents', component: ParentsComponent },
  { path: 'parent/:key', component: ParentDetailComponent },
  { path: 'courses', component: CourseComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);