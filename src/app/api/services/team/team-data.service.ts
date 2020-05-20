import { Injectable } from '@angular/core';
import { UrlBuilderService } from '../utils/url-builder.service';
import { AuthService } from '../../../auth/services/auth.service';
import { PatchService } from '../requests/patch.service';
import { GetService } from '../requests/get.service';

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
   * @param getRequestService
   */
  constructor(
    private urlBuilderService: UrlBuilderService,
    private authService: AuthService,
    private patchRequestService: PatchService,
    private getRequestService: GetService
  ) {
  }

  /**
   * Get team data
   */
  public getTeamData(teamId)
  {
    if (!teamId) {
      throw new Error('Team ID not specified');
    }

    const url = this.urlBuilderService.getApiUrl('team_data', {
      token: this.authService.getUserToken(),
      team_id: teamId
    });

    return this.getRequestService.setUrl(url).execute();
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

  /**
   * Get least of teams for current user
   */
  public getTeamsList()
  {
    const url = this.urlBuilderService.getApiUrl('team_list', {
      token: this.authService.getUserToken()
    });

    return this.getRequestService.setUrl(url).execute();
  }
}
