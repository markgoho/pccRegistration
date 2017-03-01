import {AuthService} from './auth.service';
import { Injectable } from '@angular/core';
import {Router, Route,  CanLoad, } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthLoadGuard implements CanLoad {
  constructor(private auth: AuthService, private router: Router) {}
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.auth$
            .take(1)
            .map(authState => !!authState)
            .do(authenticated => {
                if (!authenticated) {
                    this.router.navigate(['/login']);
                }
            });
  }
}
