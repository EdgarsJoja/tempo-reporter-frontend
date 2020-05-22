import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteService implements RequestService {

  /**
   * Request data object
   */
  private data: object;

  /**
   * Request URL
   */
  private url: string;

  /**
   * Constructor
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * Execute request
   */
  execute() {
    return this.http.delete(this.url, this.data).toPromise();
  }

  /**
   * Set request data
   *
   * @param data
   */
  setData(data: object) {
    this.data = data;

    return this;
  }

  /**
   * Set request url
   *
   * @param url
   */
  setUrl(url: string) {
    this.url = url;

    return this;
  }
}
