import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserTempoDataService } from '../../../api/services/user/user-tempo-data.service';
import { UserResponseTempoData } from '../../../api/models/userResponseTempoData';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.scss']
})
export class TempoComponent implements OnInit {

  public form;

  /**
   *
   * @param formBuilder
   * @param userTempoDataService
   */
  constructor(private formBuilder: FormBuilder, private userTempoDataService: UserTempoDataService) {
    this.form = this.formBuilder.group({
      tempo_token: ['', Validators.required],
      jira_account_id: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.userTempoDataService.getUserTempoData().then(data => {
      const responseData = data as UserResponseTempoData;

      if (!responseData.error) {
        this.form.patchValue(responseData.data.tempo_data);
      }
    });
  }

  /**
   * Form submit
   *
   * @param formData
   */
  onSubmit(formData) {
    this.userTempoDataService.updateUserTempoData(formData).then(data => {
      console.log(data);
    });
  }
}
