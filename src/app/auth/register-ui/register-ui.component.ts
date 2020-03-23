import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from '../services/auth.service';
import { RegisterResponseData } from '../models/registerResponseData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-ui',
  templateUrl: './register-ui.component.html',
  styleUrls: ['./register-ui.component.scss']
})
export class RegisterUiComponent implements OnInit {

  public registerForm;

  /**
   * Constructor
   *
   * @param formBuilder
   * @param authService
   * @param router
   */
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]], // @todo: Add BE validation
      first_name: [''],
      last_name: [''],
    });
  }

  ngOnInit() {
  }

  /**
   * Submit register form
   *
   * @param registerData
   */
  onSubmit(registerData) {
    this.authService.register(registerData).then(data => {
      const responseData = data as RegisterResponseData;

      if (!responseData.error) {
        this.router.navigate(['/auth/login']).then(data => {});
      }
    });
  }
}
