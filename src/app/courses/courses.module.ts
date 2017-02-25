import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  declarations: [CourseDetailComponent, CourseListComponent]
})
export class CoursesModule { }
