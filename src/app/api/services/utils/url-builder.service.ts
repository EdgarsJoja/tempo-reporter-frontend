import { Injectable } from '@angular/core';
import { EnvService } from '../../../services/env.service';

@Injectable({
  providedIn: 'root'
})
export class UrlBuilderService {

  constructor(private envService: EnvService) { }

  /**
   * Get requests host
   */
  getHost() {
    return this.envService.getEnv().api.host;
  }

  /**
   * Get endpoint by name
   *
   * @param endpoint
   * @param args
   * @param arguments
   */
  getEndpoint(endpoint: string, args: object = {}) {
    let endpointPath = String(this.envService.getEnv().api.endpoints[endpoint]);

    for (let key in args) {
      if (args.hasOwnProperty(key)) {
        endpointPath = endpointPath.replace(`{${key}}`, args[key]);
      }
    }

    return endpointPath;
  }

  /**
   * Get full API url
   *
   * @param endpoint
   * @param args
   */
  getApiUrl(endpoint: string, args: object = {}) {
    return `${this.getHost()}${this.getEndpoint(endpoint, args)}`;
  }
}
