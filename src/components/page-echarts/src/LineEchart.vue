<template>
  <div class="pie-echart">
    <base-echart :options="option"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

import BaseEchart from "@/base-ui/echart/index";
import { IDataType } from "../types/index";

const props = defineProps<{
  propData: IDataType[];
  xAxis: any[];
}>();
const option = computed(() => {
  return {
    title: {
      text: "分类商品的销售总量"
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: props.xAxis
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: props.propData,
        type: "line",
        areaStyle: {}
      }
    ]
  };
});
</script>

<style scoped></style>
