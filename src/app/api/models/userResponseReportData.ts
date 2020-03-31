import { Message, ResponseData } from '../../auth/models/response';

/**
 * User report data response
 * @todo: Remove dependency to Messages/Response Data, that are outside of module
 */
export class UserResponseReportData implements ResponseData {
  data: Data;
  error: boolean;
  messages: Message[];
}

/**
 * Data class object
 */
class Data {
  report: WorklogsData;
}

/**
 * Report data object
 */
export class WorklogsData {
  worklogs: Worklog[];
  total_time: string;
}

/**
 * Worklog object
 */
export class Worklog {
  issue: string;
  description: string[];
  time: string
}
