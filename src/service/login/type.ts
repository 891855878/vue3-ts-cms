export interface IAccountP {
  name: string;
  password: string;
}

export interface ILoginResult {
  id: number;
  name: string;
  token: string;
}

export interface IPhoneInfo {
  phone: number;
  code: number;
}
