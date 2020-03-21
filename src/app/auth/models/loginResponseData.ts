import { Message, ResponseData } from './response';

/**
 * Login response
 */
export class LoginResponseData implements ResponseData {
  data: Data;
  error: boolean;
  messages: Message[];
}

/**
 * Login data object
 */
class Data {
  user_token: string;
}
