import { Message, ResponseData } from '../../auth/models/response';

/**
 * Team list response
 */
export class TeamListResponseData implements ResponseData {
  data: Data;
  error: boolean;
  messages: Message[];
}

class Data {
  teams: Team[];
}

export class Team {
  id: number;
  name: string;
  owned: boolean;
  report_time: string;
  updated_at: string;
  created_at: string;
}
