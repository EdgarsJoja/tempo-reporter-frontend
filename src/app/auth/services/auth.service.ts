import { Injectable } from '@angular/core';
import { PostService } from '../../../api/services/requests/post.service';
import { EnvService } from '../../services/env.service';
import { RegisterData } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private envService: EnvService, private postService: PostService) {
  }

  /**
   * Register action
   *
   * @param data
   */
  register(data: RegisterData) {
    this.postService.setData(data);
    this.postService.setUrl(this.getRequestUrl(this.envService.getEnv().api.endpoints.register))

    this.postService.execute().then(data => {
      // @todo: Implement actual functionality
      console.log(data);
    });
  }

  /**
   * @todo: Refactor API url-builder as separate service
   *
   * @param endpoint
   */
  getRequestUrl(endpoint: string) {
    return `${this.envService.getEnv().api.host}${endpoint}`;
  }
}
