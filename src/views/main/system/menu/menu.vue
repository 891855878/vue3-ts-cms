<template>
  <div class="user">
    <page-search
      :serachConfig="serachConfig"
      @handleResetClick="handleReset"
      @handleSearchClick="handleSearch"
    ></page-search>
    <page-content
      :contentConfig="contentConfig"
      pathName="menu"
      addName="新增菜单"
      ref="pageContentCpn"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { serachConfig } from "./config/search-config";
import { contentConfig } from "./config/content-config";
import PageSearch from "@/components/page-search/index";
import PageContent from "@/components/page-content/index";
import { usePageSearch } from "../../../../hooks/usePageSearch";

export default defineComponent({
  name: "hy-menu",
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const [pageContentCpn, handleReset, handleSearch] = usePageSearch();
    return {
      serachConfig,
      contentConfig,
      handleReset,
      handleSearch,
      pageContentCpn
    };
  }
});
</script>

<style scoped></style>
