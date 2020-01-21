import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    LoginUiComponent,
    PageNotFoundComponent,
    RegisterUiComponent
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
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
