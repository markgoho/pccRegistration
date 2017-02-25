import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ObservablesComponent } from './observables/observables.component';


const routes: Routes = [
  { path: '', redirectTo: 'parents', pathMatch: 'full' },
  { path: 'parents', loadChildren: 'app/parents/parents.module#ParentsModule' },
  { path: 'students', loadChildren: 'app/students/students.module#StudentsModule' },
  { path: 'courses', loadChildren: 'app/courses/courses.module#CoursesModule' },
  { path: 'observables', component: ObservablesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}