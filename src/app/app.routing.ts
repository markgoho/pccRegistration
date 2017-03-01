import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ObservablesComponent } from './observables/observables.component';
import {AuthGuard} from './auth/auth-guard.service';
import { AuthLoadGuard } from './auth/auth-load.guard';


const routes: Routes = [
  // { path: '', redirectTo: 'parents', pathMatch: 'full' },
  { 
    path: 'parents', 
    loadChildren: 'app/parents/parents.module#ParentsModule', 
    canLoad: [AuthLoadGuard] 
  },
  { 
    path: 'students', 
    loadChildren: 'app/students/students.module#StudentsModule',
    canLoad: [AuthLoadGuard]
  },
  { 
    path: 'courses', 
    loadChildren: 'app/courses/courses.module#CoursesModule',
    canLoad: [AuthLoadGuard]
  },
  { path: 'observables', component: ObservablesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}