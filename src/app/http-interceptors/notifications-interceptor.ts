import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ResponseData } from '../auth/models/response';
import { ToasterService } from '../services/toaster.service';

@Injectable()
export class NotificationsInterceptor implements HttpInterceptor {
  /**
   * Constructor
   *
   * @param toaster
   */
  constructor(private toaster: ToasterService) {}

  /**
   * Trigger notifications
   *
   * @param req
   * @param next
   */
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          const response = event.body as ResponseData;

          if (response.messages) {
            response.messages.map(message => {
              this.toaster.notification(message.type, message.message);
            });
          }
        }
      })
    );
  }
}
