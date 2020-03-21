import { Injectable } from '@angular/core';

@Injectable()
export abstract class RequestService {

  /**
   * Trigger request
   * @todo: Return specific response ts model
   */
  public abstract execute(): Promise<object>;

  /**
   * Set request data
   *
   * @param data
   */
  public abstract setData(data: object): this;

  /**
   * Set request URL
   *
   * @param url
   */
  public abstract setUrl(url: string): this;
}
