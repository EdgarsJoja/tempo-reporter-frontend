import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from '../services/auth.service';

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
   */
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
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
   * @todo: Implement functionality
   *
   * @param registerData
   */
  onSubmit(registerData) {
    this.authService.register(registerData);
  }
}
