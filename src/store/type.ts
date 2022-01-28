import { IloginStore } from "@/store/login/type";
import { ISystemType } from "./main/system/type";
import { IDashBoardDataType } from "./main/analysis/type";
export interface IRootStore {
  name: string;
  age: number;
  departmentList: any[];
  roleList: any[];
  menuList: any[];
}

export interface IRootModule {
  loginModule: IloginStore;
  systemModule: ISystemType;
  dashboardModule: IDashBoardDataType;
}

export type IStoreType = IRootModule & IRootStore;
