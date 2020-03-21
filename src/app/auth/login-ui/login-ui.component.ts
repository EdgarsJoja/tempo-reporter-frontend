import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AuthService } from '../services/auth.service';
import { LoginData } from '../models/login';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginResponseData } from '../models/loginResponseData';
import { DateTimeService } from '../../services/datetime.service';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-ui.component.html',
  styleUrls: ['./login-ui.component.scss']
})
export class LoginUiComponent implements OnInit {

  public loginForm;

  /**
   * Constructor
   *
   * @param formBuilder
   * @param authService
   * @param router
   * @param cookieService
   * @param dateTimeService
   */
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService,
    private dateTimeService: DateTimeService
  ) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnInit() {
  }

  /**
   * Submit login form
   * @todo: Implement functionality
   *
   * @param loginData
   */
  onSubmit(loginData: LoginData) {
    this.authService.login(loginData).then(data => {
      const response = data as LoginResponseData;

      if (!response.error && response.data.user_token) {
        const promise = new Promise((resolve, reject) => {
          // @todo: Add wrapper service for this
          this.cookieService.set(
            'user_token',
            response.data.user_token,
            this.dateTimeService.hourFromNow(),
            '/'
          );

          if (this.cookieService.check('user_token')) {
            resolve();
          } else {
            reject();
          }
        });

        promise.then(() => {
          this.router.navigate(['/account/dashboard']).then(data => {});
        }, () => {
          console.log('rejected!');
        })
      }
    });
  }

}
