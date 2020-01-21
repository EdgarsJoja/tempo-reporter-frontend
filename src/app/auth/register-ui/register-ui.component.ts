import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-register-ui',
  templateUrl: './register-ui.component.html',
  styleUrls: ['./register-ui.component.scss']
})
export class RegisterUiComponent implements OnInit {

  private registerForm;

  /**
   * Constructor
   *
   * @param formBuilder
   */
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
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
    console.log(registerData);
  }
}
