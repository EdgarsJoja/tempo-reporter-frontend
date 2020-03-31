import { Injectable } from '@angular/core';
import { GetService } from '../requests/get.service';
import { UrlBuilderService } from '../utils/url-builder.service';
import { AuthService } from '../../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserReportService {

  /**
   * Constructor
   *
   * @param getRequestService
   * @param urlBuilderService
   * @param authService
   */
  constructor(
    private getRequestService: GetService,
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
}
