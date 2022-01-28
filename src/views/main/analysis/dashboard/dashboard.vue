<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <ky-card title="分类商品数量(饼图)">
          <pie-echart :propData="getCategoryGoodsCount"></pie-echart>
        </ky-card>
      </el-col>
      <el-col :span="10">
        <ky-card title="不同城市商品销量">
          <map-echart :mapData="getAddressGoodsSale"></map-echart>
        </ky-card>
      </el-col>
      <el-col :span="7">
        <ky-card title="分类商品数量(玫瑰图)">
          <area-echart :propData="getCategoryGoodsCount"></area-echart>
        </ky-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <ky-card title="分类商品的销量">
          <line-echart v-bind="getCategoryGoodsSale"></line-echart>
        </ky-card>
      </el-col>
      <el-col :span="12">
        <ky-card title="分类商品的收藏">
          <bar-echart v-bind="getCategoryGoodsFavor"></bar-echart>
        </ky-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import KyCard from "@/base-ui/card/index";
import {
  PieEchart,
  AreaEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from "@/components/page-echarts";

export default defineComponent({
  name: "dashboard",
  components: {
    KyCard,
    PieEchart,
    AreaEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore();

    store.dispatch("dashboardModule/getGoodsData");
    const getCategoryGoodsCount = computed(() => {
      return store.state.dashboardModule.categoryGoodsCount.map((item) => {
        return { name: item.name, value: item.goodsCount };
      });
    });

    const getCategoryGoodsSale = computed(() => {
      const xAxis: any[] = [];
      const propData: any[] = [];
      const dataSale = store.state.dashboardModule.categoryGoodsSale;

      for (const data of dataSale) {
        xAxis.push(data.name);
        propData.push(data.goodsCount);
      }
      return { xAxis, propData };
    });

    const getCategoryGoodsFavor = computed(() => {
      const xAxis: any[] = [];
      const propData: any[] = [];
      const dataSale = store.state.dashboardModule.categoryGoodsFavor;
      console.log(dataSale);
      for (const data of dataSale) {
        xAxis.push(data.name);
        propData.push(data.goodsFavor);
      }
      return { xAxis, propData };
    });

    const getAddressGoodsSale = computed(() => {
      const dataSale = store.state.dashboardModule.addressGoodsSale;
      return dataSale.map((item) => {
        return { name: item.address, value: item.count };
      });
    });

    return {
      getCategoryGoodsCount,
      getCategoryGoodsSale,
      getCategoryGoodsFavor,
      getAddressGoodsSale
    };
  }
});
</script>

<style scoped>
.content-row {
  border-top: 10px solid #f5f5f5;
}
</style>
