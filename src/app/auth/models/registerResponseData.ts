import { Message, ResponseData } from './response';

/**
 * Register response
 */
export class RegisterResponseData implements ResponseData {
  data: object;
  error: boolean;
  messages: Message[];
}
