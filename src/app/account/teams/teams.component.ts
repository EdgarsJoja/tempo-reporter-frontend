import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamDataService } from '../../api/services/team/team-data.service';
import { Team, TeamListResponseData } from '../../api/models/TeamListResponseData';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../general/confirm-dialog/confirm-dialog.component';
import { ResponseData } from '../../auth/models/response';

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
   * Participant teams getter
   */
  get participateTeams() {
    return this.teams.filter(team => !team.owned);
  }

  /**
   * Constructor
   *
   * @param router
   * @param activatedRoute
   * @param teamDataService
   * @param dialog
   */
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private teamDataService: TeamDataService,
    private dialog: MatDialog
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

  /**
   * Delete team by given ID
   *
   * @param teamId
   * @param teamName
   */
  deleteTeam(teamId, teamName) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Are you sure?',
        message: `Delete team: ${teamName}`
      }
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.teamDataService.deleteTeam(teamId).then(data => {
          const responseData = data as ResponseData;

          // If deleted successfully, remove from FE without reload
          if (!responseData.error) {
            this.teams = this.teams.filter(team => team.id !== teamId);
          }
        });
      }
    });
  }

  /**
   * Leave team
   *
   * @param teamId
   * @param teamName
   */
  leaveTeam(teamId, teamName) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Are you sure?',
        message: `Leave team: ${teamName}`
      }
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.teamDataService.leaveTeam(teamId).then(data => {
          const responseData = data as ResponseData;

          // If deleted successfully, remove from FE without reload
          if (!responseData.error) {
            this.teams = this.teams.filter(team => team.id !== teamId);
          }
        });
      }
    });
  }
}
