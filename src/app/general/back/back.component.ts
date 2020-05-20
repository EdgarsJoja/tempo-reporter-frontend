import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent implements OnInit {

  /**
   * Constructor
   * @param location
   */
  constructor(private location: LocationStrategy) { }

  ngOnInit(): void {
  }

  /**
   * Navigate back
   */
  navigateBack() {
    this.location.back();
  }
}
