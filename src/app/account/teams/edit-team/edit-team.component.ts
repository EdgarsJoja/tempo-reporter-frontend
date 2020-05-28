import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatChipList } from '@angular/material/chips';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MESSAGE_TYPE_ERROR, ToasterService } from '../../../services/toaster.service';
import { TeamDataService } from '../../../api/services/team/team-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamResponseData } from '../../../api/models/TeamResponseData';
import { ResponseData } from '../../../auth/models/response';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss'],
})
export class EditTeamComponent implements OnInit {
  /**
   * Team id for current form
   */
  private teamId = null;

  /**
   * Form
   */
  public form: FormGroup;

  /**
   * Emails array
   */
  public emails: string[] = [];

  /**
   * All autocomplete values
   *
   * @todo: Add functionality to get all emails
   */
  public allEmails: string[] = [];

  /**
   * Autocomplete values matching input
   */
  public filteredEmails: Observable<string[]>;

  /**
   * Which keys should separate emails
   */
  public separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];

  @ViewChild('emailsInput') emailsInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  @ViewChild('chipList') chipList: MatChipList;

  /**
   * Constructor
   *
   * @param formBuilder
   * @param toasterService
   * @param teamDataService
   * @param route
   * @param router
   */
  constructor(
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private teamDataService: TeamDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      user_emails: ['', [Validators.required, Validators.email]],
      report_time: [null]
    });

    this.filteredEmails = this.form.controls['user_emails'].valueChanges.pipe(
      startWith(<string>null),
      map((email: string | null) => email ? this._filter(email) : this.allEmails.slice()));
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.teamId = params['team_id'];

      if (this.teamId) {
        this.teamDataService.getTeamData(this.teamId).then(data => {
          const responseData = data as TeamResponseData;

          if (!responseData.error) {
            this.form.patchValue(responseData.data.team);
            this.emails = responseData.data.team.emails;
          }
        });
      }
    });
  }

  /**
   * Form control getter
   */
  get emailsFormControl() {
    return this.form.get('user_emails');
  }

  /**
   * Form submit action
   *
   * @param data
   */
  public onSubmit(data) {
    this.teamDataService.updateTeamData(this.prepareRequestData(data)).then(data => {
      const responseData = data as ResponseData;

      if (!responseData.error) {
        this.router.navigate(['../list'], { relativeTo: this.route }).then(data => {});
      }
    });
  }

  /**
   * Get data, which will be sent upon team edit form save
   */
  protected prepareRequestData(data) {
    data.emails = this.emails;
    data.team_id = this.teamId;

    return data;
  }

  /**
   * Remove email from array
   *
   * @param email
   */
  public removeEmail(email: string) {
    const index = this.emails.indexOf(email);

    if (index !== -1) {
      this.emails.splice(index, 1);
    }
  }

  /**
   * Add email
   *
   * @param event
   */
  public addEmail(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if (this.emailsFormControl.hasError('email')) {
      this.toasterService.notification(MESSAGE_TYPE_ERROR, 'Please enter valid email address');
    } else {
      // Add email
      if ((value || '').trim()) {
        this.emails.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.form.controls['user_emails'].setValue(null);
    }
  }

  /**
   * Autocomplete email selected
   *
   * @param event
   */
  public selectedEmail(event: MatAutocompleteSelectedEvent): void {
    this.emails.push(event.option.viewValue);
    this.emailsInput.nativeElement.value = '';
    this.form.controls['user_emails'].setValue(null);
  }

  /**
   * Filter autocomplete
   *
   * @param value
   * @private
   */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allEmails.filter(email => email.toLowerCase().indexOf(filterValue) === 0);
  }
}
