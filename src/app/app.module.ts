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
import { MainComponent } from './account/main/main.component';
import { httpInterceptorProviders } from './http-interceptors';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginUiComponent,
    PageNotFoundComponent,
    RegisterUiComponent,
    MainComponent
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
    ToastrModule.forRoot()
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
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
