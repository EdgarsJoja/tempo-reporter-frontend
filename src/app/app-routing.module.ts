import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginUiComponent } from "./auth/login-ui/login-ui.component";
import { PageNotFoundComponent } from "./general/page-not-found/page-not-found.component";
import { RegisterUiComponent } from "./auth/register-ui/register-ui.component";
import { MainComponent } from './account/main/main.component';
import { PreventGuestAccessGuard } from './auth/guards/prevent-guest-access.guard';
import { PreventAuthenticatedAccessGuard } from './auth/guards/prevent-authenticated-access.guard';

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
      { path: 'main', component: MainComponent }
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
