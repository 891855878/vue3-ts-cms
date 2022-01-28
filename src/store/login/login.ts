import { Module } from "vuex";

import type { IloginStore } from "./type";
import type { IRootStore } from "../type";
import type { IAccountP, IPhoneInfo } from "@/service/login/type";

import { accountLogin, phoneLogin } from "@/service/login/login";
import { userInfoLogin, userRoleMenu } from "../../service/login/login";
import { mapMenuToRoutes } from "@/utils/map-menus";

import { getPermission } from "@/utils/map-menus";

import localCache from "@/utils/cache";
import router from "@/router";

const loginModule: Module<IloginStore, IRootStore> = {
  namespaced: true,
  state: () => {
    return {
      token: "",
      userInfo: "",
      userMenu: "",
      premission: []
    };
  },
  getters: {},
  mutations: {
    changToken(state, payload: string) {
      state.token = payload;
    },
    changUserInfo(state, payload: any) {
      state.userInfo = payload;
    },
    changUserMenu(state, payload: any) {
      state.userMenu = payload;
      const routes = mapMenuToRoutes(payload);
      routes.forEach((route) => {
        router.addRoute("main", route);
      });

      const premissionList = getPermission(payload);
      state.premission = premissionList;
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccountP) {
      const loginResult = await accountLogin(payload);

      const { id, token } = loginResult.data;
      commit("changToken", token);
      localCache.setCache("token", token);
      dispatch("getInitialInfo", null, { root: true });

      const userInfoResult = await userInfoLogin(id);
      commit("changUserInfo", userInfoResult.data);
      localCache.setCache("userInfo", userInfoResult.data);

      const userRole = await userRoleMenu(userInfoResult.data.role.id);
      // console.log(userRole);
      commit("changUserMenu", userRole.data);
      localCache.setCache("userMenu", userRole.data);
      router.push("/main");
    },

    async phoneLoginAction({ commit }, payload: IPhoneInfo) {
      const code = await phoneLogin(payload);
      console.log(code);
    },
    loadLocalCache({ commit, dispatch }) {
      const token = localCache.getCache("token") ?? "";
      commit("changToken", token);
      dispatch("getInitialInfo", null, { root: true });

      const userInfo = localCache.getCache("userInfo") ?? "";
      commit("changUserInfo", userInfo);
      const userMenu = localCache.getCache("userMenu") ?? "";
      commit("changUserMenu", userMenu);
    }
  }
};

export default loginModule;
