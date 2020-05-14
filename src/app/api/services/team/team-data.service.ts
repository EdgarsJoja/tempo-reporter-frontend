import { Injectable } from '@angular/core';
import { UrlBuilderService } from '../utils/url-builder.service';
import { AuthService } from '../../../auth/services/auth.service';
import { PatchService } from '../requests/patch.service';

@Injectable({
  providedIn: 'root'
})
export class TeamDataService {
  /**
   * Constructor
   *
   * @param urlBuilderService
   * @param authService
   * @param patchRequestService
   */
  constructor(
    private urlBuilderService: UrlBuilderService,
    private authService: AuthService,
    private patchRequestService: PatchService
  ) {
  }

  /**
   * Get team data
   */
  public getTeamData()
  {
    // @todo: Implement functionality
  }

  /**
   * Update team data
   *
   * @param data
   */
  public updateTeamData(data)
  {
    const url = this.urlBuilderService.getApiUrl('team_data_update', {
      token: this.authService.getUserToken()
    });

    return this.patchRequestService.setData(data).setUrl(url).execute();
  }
}
