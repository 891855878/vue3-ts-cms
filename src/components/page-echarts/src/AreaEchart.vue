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
}>();
const option = computed(() => {
  return {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: "分类商品",
        type: "pie",
        radius: [10, "75%"],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8
        },
        data: props.propData
      }
    ]
  };
});
</script>

<style scoped></style>
