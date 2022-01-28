import * as echarts from "echarts";
import chinaJson from "../data/china.json";
echarts.registerMap("china", chinaJson);
export default function useEcharts(el: HTMLElement) {
  const echartsInstance = echarts.init(el);

  const setOptions = (options: echarts.EChartsOption) => {
    echartsInstance.setOption(options);
  };

  const updateSize = () => {
    echartsInstance.resize();
  };
  window.addEventListener("resize", () => {
    echartsInstance.resize({ width: "auto", height: "auto" });
  });

  return {
    echartsInstance,
    setOptions,
    updateSize
  };
}
