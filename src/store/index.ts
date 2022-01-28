import { createStore, Store, useStore as useVuexStore } from "vuex";

import loginModule from "./login/login";
import systemModule from "./main/system/system";
import dashboardModule from "./main/analysis/dashboard";
import { IRootStore, IStoreType } from "./type";
import { getPageList } from "../service/main/system/system";

const store = createStore<IRootStore>({
  state: () => {
    return {
      name: "张三",
      age: 18,
      roleList: [],
      departmentList: [],
      menuList: []
    };
  },
  getters: {},
  mutations: {
    changeDepartmentList(state, payload: any[]) {
      state.departmentList = payload;
    },
    changeRoleList(state, payload: any[]) {
      state.roleList = payload;
    },
    changeMenuList(state, payload: any[]) {
      state.menuList = payload;
    }
  },
  actions: {
    async getInitialInfo({ commit }) {
      const departmentInfo = await getPageList("/department/list", {
        offset: 0,
        size: 100
      });
      const { list: departmentList } = departmentInfo.data;
      const roleInfo = await getPageList("/role/list", {
        offset: 0,
        size: 100
      });
      const { list: roleList } = roleInfo.data;

      const menuInfo = await getPageList("/menu/list", {});
      const { list: menuList } = menuInfo.data;

      commit("changeDepartmentList", departmentList);
      commit("changeRoleList", roleList);
      commit("changeMenuList", menuList);
    }
  },
  modules: { loginModule, systemModule, dashboardModule }
});

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}

export function setupStore() {
  store.dispatch("loginModule/loadLocalCache");
}
export default store;
