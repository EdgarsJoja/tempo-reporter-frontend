import { Injectable } from '@angular/core';
import { GetService } from '../requests/get.service';
import { UrlBuilderService } from '../utils/url-builder.service';
import { AuthService } from '../../../auth/services/auth.service';
import { PatchService } from '../requests/patch.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  /**
   * Constructor
   *
   * @param getRequestService
   * @param patchRequestService
   * @param urlBuilderService
   * @param authService
   */
  constructor(
    private getRequestService: GetService,
    private patchRequestService: PatchService,
    private urlBuilderService: UrlBuilderService,
    private authService: AuthService
  ) {
  }

  /**
   * Get user data API request
   */
  public getUserData() {
    const url = this.urlBuilderService.getApiUrl('user_data', {
      token: this.authService.getUserToken()
    });

    return this.getRequestService.setUrl(url).execute();
  }

  /**
   * Update user data API request
   *
   * @param data
   */
  public updateUserData(data) {
    const url = this.urlBuilderService.getApiUrl('user_data_update', {
      token: this.authService.getUserToken()
    });

    return this.patchRequestService.setData(data).setUrl(url).execute();
  }
}
