import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamDataService } from '../../api/services/team/team-data.service';
import { Team, TeamListResponseData } from '../../api/models/TeamListResponseData';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  /**
   * All teams
   */
  public teams: Team[] = [];

  /**
   * Owned teams getter
   */
  get ownedTeams() {
    return this.teams.filter(team => team.owned);
  }

  /**
   * Constructor
   *
   * @param router
   * @param activatedRoute
   * @param teamDataService
   */
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private teamDataService: TeamDataService
  ) {
  }

  ngOnInit(): void {
    this.teamDataService.getTeamsList().then(data => {
      const responseData = data as TeamListResponseData;

      if (!responseData.error) {
        this.teams = responseData.data.teams;
      }
    });
  }

  /**
   * Open create new team view
   */
  openCreateTeamView() {
    this.router.navigate(['../edit'], { relativeTo: this.activatedRoute }).then(data => {});
  }

  /**
   * Open edit view for existing team
   *
   * @param teamId
   */
  openTeamEditView(teamId) {
    this.router.navigate(['../edit'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        team_id: teamId
      }
    }).then(data => {

    });
  }
}
