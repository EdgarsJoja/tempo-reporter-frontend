import { Injectable } from '@angular/core';
import { Env } from '../models/env';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  private appEnv: Env;

  constructor(private http: HttpClient) { }

  /**
   * Load config from environment json file
   */
  loadAppEnv() {
    return this.http.get('/environments/env/env.json')
      .toPromise()
      .then(data => {
        this.appEnv = data as Env;
      });
  }

  /**
   * Property getter
   */
  getEnv() {
    return this.appEnv;
  }
}
