import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Tempo Reporter';

  public navLinks = [
    { path: '/account/dashboard', label: 'Dashboard' },
    { path: '/account/teams', label: 'Teams' },
    { path: '/account/reports', label: 'Reports' },
    { path: '/account/settings', label: 'Settings' },
  ];

  constructor(public authService: AuthService) {
  }
}
