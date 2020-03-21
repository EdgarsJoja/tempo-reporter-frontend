import { Message, ResponseData } from '../../auth/models/response';

/**
 * User data response
 * @todo: Remove dependency to Messages/Response Data, that are outside of module
 */
export class UserResponseData implements ResponseData {
  data: Data;
  error: boolean;
  messages: Message[];
}

/**
 * Login data object
 */
class Data {
  user: {
    email: string,
    first_name: string,
    last_name: string
  };
}
