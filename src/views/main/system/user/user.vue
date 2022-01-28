<template>
  <div class="user">
    <page-search
      :serachConfig="serachConfig"
      @handleResetClick="handleReset"
      @handleSearchClick="handleSearch"
    ></page-search>
    <page-content
      :contentConfig="contentConfig"
      pathName="users"
      addName="新增用户"
      ref="pageContentCpn"
      @handleAddData="handleAddData"
      @handleEditData="handleEditData"
    ></page-content>
    <page-modal
      :modalConfig="modalConfigData"
      ref="pageModalCpn"
      title="新增用户"
      :deafultData="deafultData"
      pathName="users"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store/index";
import PageSearch from "@/components/page-search/index";
import PageContent from "@/components/page-content/index";
import PageModal from "@/components/page-modal/index";

import { serachConfig } from "./config/search-config";
import { contentConfig } from "./config/content-config";
import { modalConfig } from "./config/modal-config";

import { usePageSearch } from "@/hooks/usePageSearch";
import { usePageModal } from "@/hooks/usePageModal";

export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const store = useStore();
    const [pageContentCpn, handleReset, handleSearch] = usePageSearch();
    const [pageModalCpn, deafultData, handleAddData, handleEditData] =
      usePageModal(
        () => {
          const passwordItem = modalConfig.formItems.find(
            (item) => item.field === "password"
          );
          if (passwordItem?.isHidden) {
            passwordItem.isHidden = false;
          }
        },
        () => {
          const passwordItem = modalConfig.formItems.find(
            (item) => item.field === "password"
          );
          if (passwordItem?.isHidden === false) {
            passwordItem.isHidden = true;
          }
        }
      );
    const modalConfigData = computed(() => {
      const departmentOptions = modalConfig.formItems.find((item) => {
        return item.field === "departmentId";
      });
      if (departmentOptions?.options) {
        departmentOptions.options = store.state.departmentList.map((item) => {
          return { title: item.name, value: item.id };
        });
      }
      const roleOptions = modalConfig.formItems.find((item) => {
        return item.field === "roleId";
      });
      if (roleOptions?.options) {
        roleOptions.options = store.state.roleList.map((item) => {
          return { title: item.name, value: item.id };
        });
      }
      return modalConfig;
    });

    return {
      serachConfig,
      contentConfig,
      handleReset,
      handleSearch,
      pageContentCpn,
      modalConfig,
      handleAddData,
      handleEditData,
      pageModalCpn,
      deafultData,
      modalConfigData
    };
  }
});
</script>

<style scoped></style>
