import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { LoginUiComponent } from './auth/login-ui/login-ui.component';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { PageNotFoundComponent } from './general/page-not-found/page-not-found.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDividerModule } from "@angular/material/divider";
import { RegisterUiComponent } from './auth/register-ui/register-ui.component';
import { ApiModule } from './api/api.module';
import { EnvService } from './services/env.service';
import { httpInterceptorProviders } from './http-interceptors';
import { ToastrModule } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { MatListModule } from '@angular/material/list';
import { SettingsComponent } from './account/settings/settings.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AccountComponent } from './account/settings/account/account.component';
import { TempoComponent } from './account/settings/tempo/tempo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUiComponent,
    PageNotFoundComponent,
    RegisterUiComponent,
    DashboardComponent,
    SettingsComponent,
    AccountComponent,
    TempoComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDividerModule,
        ApiModule,
        ToastrModule.forRoot(),
        MatSidenavModule,
        MatListModule,
        MatTabsModule
    ],
  providers: [
    EnvService,
    {
      provide: APP_INITIALIZER,
      useFactory: (svc: EnvService) => { return () => svc.loadAppEnv() },
      multi: true,
      deps: [
        EnvService
      ]
    },
    httpInterceptorProviders,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
