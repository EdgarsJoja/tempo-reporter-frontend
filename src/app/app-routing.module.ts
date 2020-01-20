import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginUiComponent } from "./auth/login-ui/login-ui.component";
import { PageNotFoundComponent } from "./general/page-not-found/page-not-found.component";


const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginUiComponent },
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
