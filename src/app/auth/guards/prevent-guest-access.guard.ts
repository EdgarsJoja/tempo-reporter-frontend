import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PreventGuestAccessGuard implements CanActivateChild {

  /**
   * Constructor
   *
   * @param authService
   * @param router
   */
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Check if can activate child routes
   *
   * @param childRoute
   * @param state
   */
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/auth/login']).then(data => {});
    }

    return this.authService.isLoggedIn();
  }
}
