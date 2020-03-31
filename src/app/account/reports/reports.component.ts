import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserReportService } from '../../api/services/user/user-report.service';
import { DatePipe } from '@angular/common';
import { UserResponseReportData, Worklog, WorklogsData } from '../../api/models/userResponseReportData';

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

  public report: WorklogsData;

  /**
   * Constructor
   *
   * @param userReportService
   * @param datePipe
   */
  constructor(private userReportService: UserReportService, private datePipe: DatePipe) {
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
   *
   */
  public getReport() {
    this.userReportService.getUserReport(this.datePipe.transform(this.date.value, 'y-MM-d')).then(data => {
      const responseData = data as UserResponseReportData;

      if (!responseData.error) {
        this.report = responseData.data.report;
      }
    });
  }

}
