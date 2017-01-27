import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home.component';
import { StudentComponent } from './student/student.component';
import { ParentComponent } from './parent/parent.component';
import { CourseComponent } from './course/course.component';

const APP_ROUTES: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'parents', component: ParentComponent },
  { path: 'courses', component: CourseComponent },
  { path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);