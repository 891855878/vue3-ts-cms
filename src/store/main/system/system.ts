import { Module } from "vuex";

import { IRootStore } from "@/store/type";
import { ISystemType } from "./type";
import {
  getPageList,
  deletePageData,
  createPageData,
  editPageData
} from "@/service/main/system/system";
const systemModule: Module<ISystemType, IRootStore> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0
    };
  },
  getters: {
    getPageListDate(state) {
      return (pathName: string) => {
        return (state as any)[`${pathName}List`];
      };
    },
    getPageListCount(state) {
      return (pathName: string) => {
        return (state as any)[`${pathName}Count`];
      };
    }
  },
  mutations: {
    changUsersList(state, payload: any[]) {
      state.usersList = payload;
    },
    changUsersCount(state, payload: number) {
      state.usersCount = payload;
    },
    changRoleList(state, payload: any[]) {
      state.roleList = payload;
    },
    changRoleCount(state, payload: number) {
      state.roleCount = payload;
    },
    changGoodsList(state, payload: any[]) {
      state.goodsList = payload;
    },
    changGoodsCount(state, payload: number) {
      state.goodsCount = payload;
    },
    changMenuList(state, payload: any[]) {
      state.menuList = payload;
    },
    changMenuCount(state, payload: number) {
      state.menuCount = payload;
    },
    changDepartmentList(state, payload: any[]) {
      state.departmentList = payload;
    },
    changDepartmentCount(state, payload: number) {
      state.departmentCount = payload;
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pathUrl = `/${payload.pathName}/list`;

      const userList = await getPageList(pathUrl, payload.data);

      const { list, totalCount } = userList.data;
      let name = payload.pathName;
      name = name.slice(0, 1).toUpperCase() + name.slice(1);
      commit(`chang${name}List`, list);
      commit(`chang${name}Count`, totalCount);
    },

    async deletePageDataAction(context, payload: any) {
      const { pathName, id } = payload;
      const pathUrl = `/${pathName}/${id}`;
      console.log(pathUrl);

      await deletePageData(pathUrl);
      context.dispatch("getPageListAction", {
        pathName,
        data: {
          offset: 0,
          size: 10
        }
      });
    },
    async createPageDataAction(context, payload: any) {
      const { pathName, newData } = payload;
      const pathUrl = `/${pathName}`;
      await createPageData(pathUrl, newData);
      context.dispatch("getPageListAction", {
        pathName,
        data: {
          offset: 0,
          size: 10
        }
      });
    },
    async editPageDataAction(context, payload: any) {
      const { pathName, editData, id } = payload;
      const pathUrl = `/${pathName}/${id}`;
      await editPageData(pathUrl, editData);
      context.dispatch("getPageListAction", {
        pathName,
        data: {
          offset: 0,
          size: 10
        }
      });
    }
  }
};

export default systemModule;
