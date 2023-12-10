export interface IUserSignInValues {
  username: string;
  password: string;
}

export interface IUserSignUpValues {
  username: string;
  password: string;
  email?: string | null;
  confirmPassword: string;
}

export interface IUserData {
  username: string;
  token: string;
  userId: string;
  email?: string;
}
