export class Env {
  public api: ApiEnv;
}

export class ApiEnv {
  public host: string;
  public endpoints: ApiEndpointsEnv;
}

export class ApiEndpointsEnv {
  public register: string
}
