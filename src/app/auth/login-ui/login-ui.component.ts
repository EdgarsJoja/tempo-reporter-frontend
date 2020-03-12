import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AuthService } from '../services/auth.service';
import { LoginData } from '../models/login';
import { ResponseData } from '../models/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-ui.component.html',
  styleUrls: ['./login-ui.component.scss']
})
export class LoginUiComponent implements OnInit {

  private loginForm;

  /**
   * Constructor
   *
   * @param formBuilder
   * @param authService
   * @param router
   */
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnInit() {}

  /**
   * Submit login form
   * @todo: Implement functionality
   *
   * @param loginData
   */
  onSubmit(loginData: LoginData) {
    this.authService.login(loginData).then(data => {
      const response = data as ResponseData;

      if (!response.error) {
        this.router.navigate(['/account/main']).then(data => {});
      }
    });
  }

}
