import { Injectable } from '@angular/core';
import { GetService } from '../requests/get.service';
import { UrlBuilderService } from '../utils/url-builder.service';
import { AuthService } from '../../../auth/services/auth.service';
import { PostService } from '../requests/post.service';

@Injectable({
  providedIn: 'root'
})
export class UserReportService {

  /**
   * Constructor
   *
   * @param getRequestService
   * @param postRequestService
   * @param urlBuilderService
   * @param authService
   */
  constructor(
    private getRequestService: GetService,
    private postRequestService: PostService,
    private urlBuilderService: UrlBuilderService,
    private authService: AuthService
  ) {
  }

  /**
   * Get user report API request
   */
  public getUserReport(date: string) {
    const url = this.urlBuilderService.getApiUrl('user_report', {
      token: this.authService.getUserToken(),
      date: date
    });

    return this.getRequestService.setUrl(url).execute();
  }

  /**
   * Generate new report and retrieve it
   *
   * @param date
   */
  public generateUserReport(date: string) {
    const url = this.urlBuilderService.getApiUrl('user_report_generate', {
      token: this.authService.getUserToken(),
      date: date
    });

    return this.postRequestService.setUrl(url).execute();
  }
}
