import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  public cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Teams', url: '/account/teams/list', icon: 'group', cols: 2, rows: 1 },
          { title: 'Reports', url: '/account/reports', icon: 'notes', cols: 2, rows: 1 },
          { title: 'Settings', url: '/account/settings', icon: 'settings', cols: 2, rows: 1 },
          { title: 'TODO: Add', url: '', icon: 'warning', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'Teams', url: '/account/teams/list', icon: 'group', cols: 1, rows: 1 },
        { title: 'Reports', url: '/account/reports', icon: 'notes', cols: 1, rows: 1 },
        { title: 'Settings', url: '/account/settings', icon: 'settings', cols: 1, rows: 1 },
        { title: 'TODO: Add', url: '', icon: 'warning', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
