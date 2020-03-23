import { Message, ResponseData } from '../../auth/models/response';

/**
 * User tempo data response
 * @todo: Remove dependency to Messages/Response Data, that are outside of module
 */
export class UserResponseTempoData implements ResponseData {
  data: Data;
  error: boolean;
  messages: Message[];
}

/**
 * Tempo data object
 */
class Data {
  tempo_data: {
    tempo_token: string,
    jira_account_id: string
  };
}
