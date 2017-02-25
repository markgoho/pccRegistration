import { Routes, RouterModule} from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ObservablesComponent } from './observables/observables.component';


const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'observables', component: ObservablesComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
