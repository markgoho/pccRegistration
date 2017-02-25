import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'student/:studentId', component: StudentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StudentsRoutingModule { }
