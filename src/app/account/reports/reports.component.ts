import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserReportService } from '../../api/services/user/user-report.service';
import { DatePipe } from '@angular/common';
import { UserResponseReportData, Worklog, WorklogsData } from '../../api/models/userResponseReportData';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../general/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  providers: [
    DatePipe
  ]
})
export class ReportsComponent implements OnInit {

  /**
   * Input value model
   */
  public date;

  /**
   * Max selectable date
   */
  public maxDate;

  /**
   * Report data
   */
  public report: WorklogsData;

  /**
   * Boolean showing if generation request is in progress
   */
  public reportGenerationInProgress: boolean = false;

  /**
   * Constructor
   *
   * @param userReportService
   * @param datePipe
   * @param dialog
   */
  constructor(private userReportService: UserReportService, private datePipe: DatePipe, private dialog: MatDialog) {
    // Set today as default value
    this.date = new FormControl({
      value: new Date(),
      disabled: true
    });

    // Allow select only today or past dates
    this.maxDate = new Date();
  }

  ngOnInit(): void {
    this.getReport();
  }

  /**
   *
   */
  get worklogs() {
    const result = [];

    Object.keys(this.report.worklogs).map(key => {
      const worklog = this.report.worklogs[key] as Worklog;

      result.push({
        issue: key,
        timelogs: worklog.description,
        time: worklog.time
      })
    });

    return result;
  }

  /**
   * Return date value formatted for API requests
   */
  get formattedDate() {
    return this.datePipe.transform(this.date.value, 'y-MM-d')
  }

  /**
   * Get report data
   */
  public getReport() {
    this.userReportService.getUserReport(this.formattedDate).then(data => {
      this.assignReportData(data);
    });
  }

  /**
   * Handle response data and assign it to corresponding values
   *
   * @param data
   */
  protected assignReportData(data) {
    const responseData = data as UserResponseReportData;

    if (!responseData.error) {
      this.report = responseData.data.report;
    }
  }

  /**
   * On generate button click
   */
  public handleGenerateReportButtonClick() {
    if (this.report) {
      this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Hey',
          message: 'There already exists report for this date. Generate new?'
        }
      }).afterClosed().subscribe(confirmed => {
        if (confirmed) {
          this.generateReport()
        }
      });
    } else {
      this.generateReport();
    }
  }

  /**
   * Generate new report and get data
   */
  protected generateReport() {
    this.reportGenerationInProgress = true;

    this.userReportService.generateUserReport(this.formattedDate).then(data => {
      this.assignReportData(data);
    }).finally(() => {
      this.reportGenerationInProgress = false;
    });
  }
}
