import { Injectable } from '@angular/core';
import { PostService } from '../../../api/services/requests/post.service';
import { EnvService } from '../../services/env.service';
import { RegisterData } from '../models/register';
import { LoginData } from '../models/login';
import { UrlBuilderService } from '../../../api/services/utils/url-builder.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   *
   * @param envService
   * @param postService
   * @param urlBuilderService
   */
  constructor(
    private envService: EnvService,
    private postService: PostService,
    private urlBuilderService: UrlBuilderService
  ) {
  }

  /**
   * Register action
   *
   * @param data
   */
  register(data: RegisterData) {
    this.postService.setData(data);
    this.postService.setUrl(this.urlBuilderService.getApiUrl('register'));

    this.postService.execute().then(data => {
      // @todo: Implement actual functionality
      console.log(data);
    });
  }

  login(data: LoginData) {
    this.postService.setData(data);
    this.postService.setUrl(this.urlBuilderService.getApiUrl('login'));

    this.postService.execute().then(data => {
      // @todo: Implement actual functionality
      console.log(data);
    });
  }
}
