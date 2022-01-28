<template>
  <div class="not-found"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style scoped>
.not-found {
  height: 100%;
  background: url("../../assets/img/404.jpg");
  background-size: 100%;
}
</style>
