import { Injectable } from '@angular/core';
import { GetService } from '../requests/get.service';
import { UrlBuilderService } from '../utils/url-builder.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  /**
   * Constructor
   *
   * @param getRequestService
   * @param urlBuilderService
   */
  constructor(
    private getRequestService: GetService,
    private urlBuilderService: UrlBuilderService
  ) {
  }

  /**
   *
   * @param token
   */
  public getUserData(token: string) {
    const url = this.urlBuilderService.getApiUrl('user_data', { token: token });

    return this.getRequestService.setUrl(url).execute();
  }
}
