import { Module } from "vuex";
import { IDashBoardDataType } from "./type";
import { IRootStore } from "../../type";
import {
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getAddressGoodsSale,
  getCategoryGoodsSale
} from "@/service/main/analysis/dashboard";

const dashboard: Module<IDashBoardDataType, IRootStore> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    };
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list;
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list;
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list;
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list;
    }
  },
  actions: {
    async getGoodsData({ commit }) {
      const categoryGoodsCountData = await getCategoryGoodsCount();
      commit("changeCategoryGoodsCount", categoryGoodsCountData.data);
      const categoryGoodsFavorData = await getCategoryGoodsFavor();
      commit("changeCategoryGoodsFavor", categoryGoodsFavorData.data);
      const categoryGoodsSaleData = await getCategoryGoodsSale();
      commit("changeCategoryGoodsSale", categoryGoodsSaleData.data);
      const addressGoodsSaleData = await getAddressGoodsSale();
      commit("changeAddressGoodsSale", addressGoodsSaleData.data);
    }
  }
};

export default dashboard;
