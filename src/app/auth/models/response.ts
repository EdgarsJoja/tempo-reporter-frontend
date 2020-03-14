export class ResponseData {
  public error: boolean;
  public messages: Message[];
  public data: {};
}

export class Message {
  public type: string;
  public message: string;
}
