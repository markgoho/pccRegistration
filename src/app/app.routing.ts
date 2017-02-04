import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home.component';
import { StudentComponent } from './student/student.component';
import { ParentsComponent } from './parents/parents.component';
import { CourseComponent } from './course/course.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { ParentDetailComponent } from './parent/parent-detail/parent-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const APP_ROUTES: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'parents', component: ParentsComponent },
  { path: 'parent/:key', component: ParentDetailComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'signin', component: SigninComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);