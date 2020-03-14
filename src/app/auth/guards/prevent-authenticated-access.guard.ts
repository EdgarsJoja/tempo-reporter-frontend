import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PreventAuthenticatedAccessGuard implements CanActivateChild {
  /**
   * Constructor
   *
   * @param authService
   * @param router
   */
  constructor(private authService: AuthService, private router: Router) {}

  /**
   *
   * @param next
   * @param state
   */
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/account/main']).then(data => {});
    }

    return !this.authService.isLoggedIn();
  }

}
