<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps, withDefaults, watchEffect } from "vue";
import { EChartsOption } from "echarts";
import useEcharts from "../hooks/useEcharts";
const props = withDefaults(
  defineProps<{
    options: EChartsOption;
    width?: string;
    height?: string;
  }>(),
  { width: "100%", height: "350px" }
);
const echartDivRef = ref<HTMLElement>();
onMounted(() => {
  const { setOptions } = useEcharts(echartDivRef.value!);
  watchEffect(() => {
    setOptions(props.options);
  });
});
</script>

<style scoped></style>
