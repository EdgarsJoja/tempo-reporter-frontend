export class ResponseData {
  public error: boolean;
  public messages: Message[];
  public data: [];
}

class Message {
  public type: string;
  public message: string;
}
