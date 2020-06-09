import { Message, ResponseData } from '../../auth/models/response';

/**
 * Team response
 */
export class TeamResponseData implements ResponseData {
  data: Data;
  error: boolean;
  messages: Message[];
}

class Data {
  team: Team;
}

export class Team {
  id: number;
  name: string;
  report_time: string;
  emails: string[];
  updated_at: string;
  created_at: string;
  owner: string[];
}
