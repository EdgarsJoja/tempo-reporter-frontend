import { Injectable } from '@angular/core';
import { GetService } from '../requests/get.service';
import { PostService } from '../requests/post.service';
import { UrlBuilderService } from '../utils/url-builder.service';
import { AuthService } from '../../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserTempoDataService {

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
   * Get user tempo data API request
   */
  public getUserTempoData() {
    const url = this.urlBuilderService.getApiUrl('user_tempo_data', {
      token: this.authService.getUserToken()
    });

    return this.getRequestService.setUrl(url).execute();
  }

  /**
   * Update user tempo data API request
   *
   * @param data
   */
  public updateUserTempoData(data) {
    const url = this.urlBuilderService.getApiUrl('user_tempo_data_update', {
      token: this.authService.getUserToken()
    });

    return this.postRequestService.setData(data).setUrl(url).execute();
  }
}
