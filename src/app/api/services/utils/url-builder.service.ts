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
   */
  getEndpoint(endpoint: string) {
    return this.envService.getEnv().api.endpoints[endpoint];
  }

  /**
   * Get full API url
   *
   * @param endpoint
   */
  getApiUrl(endpoint: string) {
    return `${this.getHost()}${this.getEndpoint(endpoint)}`;
  }
}
