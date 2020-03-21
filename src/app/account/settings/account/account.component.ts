import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserDataService } from '../../../api/services/user/user-data.service';
import { AuthService } from '../../../auth/services/auth.service';
import { UserResponseData } from '../../../api/models/userResponseData';

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
   * @param userDataService
   * @param authService
   */
  constructor(
    private formBuilder: FormBuilder,
    private userDataService: UserDataService,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
    });
  }

  ngOnInit(): void {
    this.userDataService.getUserData(this.authService.getUserToken()).then(data => {
      const responseData  = data as UserResponseData;

      this.form.patchValue(responseData.data.user);
    });
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
