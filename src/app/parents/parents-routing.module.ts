import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentListComponent } from './parent-list/parent-list.component';
import { ParentDetailComponent } from './parent-detail/parent-detail.component';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  { path: 'parents', component: ParentListComponent, canActivate: [AuthGuard] },
  { path: 'parent/:key', component: ParentDetailComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ParentsRoutingModule { }
