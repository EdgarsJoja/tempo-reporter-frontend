import { Component, OnInit } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { TempoComponent } from './tempo/tempo.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public tabs = [
    { label: 'Account', content: AccountComponent },
    { label: 'Tempo API', content: TempoComponent },
    { label: 'Reports', content: null },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
