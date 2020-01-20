import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

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
   */
  constructor(private formBuilder: FormBuilder) {
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
  onSubmit(loginData) {
    console.log(loginData);
  }

}
