<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const a = () => {
      console.log("按钮被点击");
    };

    return {
      a
    };
  }
});
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
