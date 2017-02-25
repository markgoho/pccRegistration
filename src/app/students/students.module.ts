import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { StudentsRoutingModule } from './students-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [StudentListComponent, StudentDetailComponent]
})
export class StudentsModule { }
