export interface IUserLoginValues {
  username: string;
  password: string;
}

export interface ISignInResponse {
  message: string;
  username: string;
  token: string;
}
