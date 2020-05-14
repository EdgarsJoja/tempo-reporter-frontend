import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  /**
   * Constructor
   *
   * @param router
   * @param activatedRoute
   */
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  /**
   * Open create new team view
   */
  openCreateTeamView() {
    // this.router.navigate(['edit'], { relativeTo: this.activatedRoute }).then(data => {});
    this.router.navigate(['/account/teams/edit']).then(data => {});
  }
}
