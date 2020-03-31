import { Pipe, PipeTransform } from '@angular/core';
import { Worklog, WorklogsData } from '../../../api/models/userResponseReportData';

@Pipe({
  name: 'worklogsToText'
})
export class WorklogsToTextPipe implements PipeTransform {

  /**
   * Convert worklogs object to plain text
   *
   * @param value
   * @param args
   */
  transform(value: WorklogsData|null, ...args: unknown[]): string {
    if (value === undefined || value === null) {
      return 'No data';
    }

    let result = '';

    result = WorklogsToTextPipe.addTotalTime(result, value);
    result = result.concat('\n'); // Add extra empty line in between

    result = WorklogsToTextPipe.addIssuesWorklogs(result, value.worklogs);

    return result;
  }

  /**
   * Add total time spent text line
   *
   * @param text
   * @param data
   */
  private static addTotalTime(text: string, data: WorklogsData) {
    return text.concat('Total time: ', data.total_time, '\n');
  }

  /**
   * Convert timelogs into text
   *
   * @param text
   * @param data
   */
  private static addIssuesWorklogs(text: string, data: Worklog[]): string {
    data.map(item => {
      text = text.concat(item.issue, ' ', `(${item.time})`, '\n');

      item.description.map(descriptionText => {
        text = text.concat(descriptionText, '\n');
      });

      text = text.concat('\n');
    });

    return text;
  }
}
