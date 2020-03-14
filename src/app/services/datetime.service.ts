import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor() { }

  /**
   * Get time 1h from now
   */
  hourFromNow() {
    const date = new Date();

    date.setHours(date.getHours() + 1);

    return date;
  }
}
