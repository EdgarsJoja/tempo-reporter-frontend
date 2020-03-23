export class Env {
  public api: ApiEnv;
}

export class ApiEnv {
  public host: string;
  public endpoints: ApiEndpointsEnv;
}

export class ApiEndpointsEnv {
  public register: string;
  public login: string;
  public user_data: string;
  public user_data_update: string;
  public user_tempo_data: string;
  public user_tempo_data_update: string;
}
