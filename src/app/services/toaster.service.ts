import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const MESSAGE_TYPE_SUCCESS = 'success';
export const MESSAGE_TYPE_ERROR = 'error';
export const MESSAGE_TYPE_INFO = 'info';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  /**
   * Constructor
   *
   * @param toaster
   */
  constructor(private toaster: ToastrService) { }

  /**
   *
   * @param type
   * @param message
   */
  notification(type: string, message: string) {
    switch (type) {
      case MESSAGE_TYPE_SUCCESS:
        this.toaster.success(message, 'Success');
        break;
      case MESSAGE_TYPE_ERROR:
        this.toaster.error(message, 'Error');
        break;
      case MESSAGE_TYPE_INFO:
      default:
        this.toaster.info(message, 'Info');
        break;
    }
  }
}
