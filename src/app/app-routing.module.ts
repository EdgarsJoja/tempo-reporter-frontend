import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginUiComponent } from "./auth/login-ui/login-ui.component";
import { PageNotFoundComponent } from "./general/page-not-found/page-not-found.component";
import { RegisterUiComponent } from "./auth/register-ui/register-ui.component";
import { PreventGuestAccessGuard } from './auth/guards/prevent-guest-access.guard';
import { PreventAuthenticatedAccessGuard } from './auth/guards/prevent-authenticated-access.guard';
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { SettingsComponent } from './account/settings/settings.component';
import { ReportsComponent } from './account/reports/reports.component';

const routes: Routes = [
  {
    path: 'auth',
    canActivateChild: [PreventAuthenticatedAccessGuard],
    children: [
      { path: 'login', component: LoginUiComponent },
      { path: 'register', component: RegisterUiComponent },
    ]
  },
  {
    path: 'account',
    canActivateChild: [PreventGuestAccessGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent  },
      { path: 'reports', component: ReportsComponent  },
      { path: 'settings', component: SettingsComponent  },
    ]
  },
  { path: '',   redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
