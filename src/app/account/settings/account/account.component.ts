import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public form;

  /**
   * Constructor
   *
   * @param formBuilder
   */
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
    });
  }

  ngOnInit(): void {
  }

  /**
   * @todo: Implement functionality
   *
   * @param formData
   */
  onSubmit(formData) {
    console.log(formData);
  }
}
