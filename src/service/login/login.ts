import axios from "axios";
import KYRequest from "../index";

import { IAccountP, ILoginResult, IPhoneInfo } from "./type";
import { IDataType } from "../type";

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/",
  UserRoleMenu = "/role/"
}

export function accountLogin(payload: IAccountP) {
  //登录
  return KYRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: payload
  });
}

export function userInfoLogin(id: number) {
  //用户信息
  return KYRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  });
}

//角色菜单树
export function userRoleMenu(id: number) {
  return KYRequest.get<IDataType>({
    url: LoginAPI.UserRoleMenu + id + "/menu"
  });
}

export function phoneLogin(phoneInfo: IPhoneInfo) {
  return axios.get(
    `/api?u=891855878&p=906f779b32044a9c8c4b27d9f39b7f8d&m=
      ${phoneInfo.phone}
      "}&c=【神洲游后台管理】验证码:${phoneInfo.code},你正在登录后台管理系统。(验证码告知他人将导致账号被盗，请勿泄露)`
  );
}
