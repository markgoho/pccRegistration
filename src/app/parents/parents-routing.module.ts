import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentListComponent } from './parent-list/parent-list.component';
import { ParentDetailComponent } from './parent-detail/parent-detail.component';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  // Root path is parents/
  { path: '', component: ParentListComponent, canLoad: [AuthGuard] },
  { path: ':key', component: ParentDetailComponent, canLoad: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ParentsRoutingModule { }
