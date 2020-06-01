import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Tempo Reporter';

  public navLinks = [
    { path: '/account/dashboard', label: 'Dashboard' },
    { path: '/account/teams/list', label: 'Teams' },
    { path: '/account/reports', label: 'Reports' },
    { path: '/account/settings', label: 'Settings' },
  ];

  /**
   * Constructor
   * @param authService
   * @param router
   */
  constructor(public authService: AuthService, private router: Router) {
  }

  /**
   * Logout
   */
  public logout() {
    this.authService.logout();
    this.router.navigate(['/']).then(data => {});
  }
}
