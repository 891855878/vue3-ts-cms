<template>
  <div class="nav-search">
    <ky-form v-bind="serachConfig" v-model="formData">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <div class="footer">
          <el-button @click="handleReset"
            ><el-icon><refresh-right /></el-icon>重置</el-button
          >
          <el-button type="primary" @click="handleSearch"
            ><el-icon><search /></el-icon>搜索</el-button
          >
        </div>
      </template>
    </ky-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import KyForm from "@/base-ui/form";
import { RefreshRight, Search } from "@element-plus/icons-vue";

export default defineComponent({
  emits: ["handleResetClick", "handleSearchClick"],
  props: {
    serachConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    KyForm,
    RefreshRight,
    Search
  },
  setup(props, { emit }) {
    const formItems = props.serachConfig?.formItems ?? [];
    const formOriginData: any = {};
    for (const item of formItems) {
      formOriginData[item.field] = "";
    }
    const formData = ref(formOriginData);

    //重置
    const handleReset = () => {
      for (const key in formData.value) {
        formData.value[key] = formOriginData[key];
      }
      emit("handleResetClick");
    };
    //搜索
    const handleSearch = () => {
      emit("handleSearchClick", formData.value);
    };
    return { formData, handleReset, handleSearch };
  }
});
</script>

<style scoped>
.footer {
  text-align: right;
  padding: 0px 50px 20px 0px;
}
</style>
