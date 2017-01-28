import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home.component';
import { StudentComponent } from './student/student.component';
import { ParentsComponent } from './parents/parents.component';
import { CourseComponent } from './course/course.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const APP_ROUTES: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'parents', component: ParentsComponent },
  { path: 'courses', component: CourseComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);