import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { ParentListComponent } from './parent-list/parent-list.component';
import { ParentDetailComponent } from './parent-detail/parent-detail.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { ParentsRoutingModule } from './parents-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ParentsRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    ParentListComponent, 
    ParentDetailComponent,
  ],
  providers: [AuthGuard]
})
export class ParentsModule { }
