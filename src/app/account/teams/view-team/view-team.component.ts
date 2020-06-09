import { Component, OnInit } from '@angular/core';
import { TeamDataService } from '../../../api/services/team/team-data.service';
import { Team, TeamResponseData } from '../../../api/models/TeamResponseData';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.scss']
})
export class ViewTeamComponent implements OnInit {
  /**
   * Selected team data
   */
  public team: Team = {
    id: 0,
    name: '',
    emails: [],
    report_time: '',
    updated_at: '',
    created_at: '',
    owner: []
  };

  /**
   * Team id for current form
   */
  private teamId = null;

  /**
   *
   * @param teamDataService
   */
  constructor(
    private teamDataService: TeamDataService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    console.log(this.route.queryParams);
    this.route.queryParams.subscribe(params => {
      this.teamId = params['team_id'];
      this.teamDataService.getTeamData(this.teamId).then(data => {
        const responseData = data as TeamResponseData;

        if (!responseData.error) {
          this.team = responseData.data.team;
          console.log(this.team);
        }
      });
    });
  }
}
