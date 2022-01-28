<template>
  <div class="user">
    <page-search
      :serachConfig="serachConfig"
      @handleResetClick="handleReset"
      @handleSearchClick="handleSearch"
    ></page-search>
    <page-content
      :contentConfig="contentConfig"
      pathName="role"
      ref="pageContentCpn"
      addName="新增角色"
      @handleAddData="handleAddData"
      @handleEditData="handleEditData"
    ></page-content>
    <page-modal
      :modalConfig="modalConfig"
      ref="pageModalCpn"
      :deafultData="deafultData"
      pathName="role"
      title="新增角色"
      :otherInfo="otherInfo"
    >
      <el-tree
        :data="menuData"
        show-checkbox
        node-key="id"
        :default-checked-keys="defaultCheckedKeys"
        :props="{ children: 'children', label: 'name' }"
        @check="handleChangeCheck"
      />
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "@/store/index";

import PageSearch from "@/components/page-search/index";
import PageModal from "@/components/page-modal/index";
import PageContent from "@/components/page-content/index";
import { serachConfig } from "./config/search-config";
import { contentConfig } from "./config/content-config";
import { modalConfig } from "./config/modal-config";

import { usePageSearch } from "@/hooks/usePageSearch";
import { usePageModal } from "@/hooks/usePageModal";
import { getMenuListId } from "@/utils/map-menus";

export default defineComponent({
  name: "role",
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const store = useStore();
    const defaultCheckedKeys = ref<any>([]);
    const [pageContentCpn, handleReset, handleSearch] = usePageSearch();
    const [pageModalCpn, deafultData, handleAddData, handleEditData] =
      usePageModal(
        () => {
          defaultCheckedKeys.value = [];
        },
        (item) => {
          const leafKeys = getMenuListId(item.menuList);
          defaultCheckedKeys.value = leafKeys;
        }
      );
    const menuData = computed(() => store.state.menuList);
    const otherInfo = ref({});
    const handleChangeCheck = (data1: any, data2: any) => {
      const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys];
      otherInfo.value = { menuList };
    };
    return {
      pageContentCpn,
      pageModalCpn,
      deafultData,
      menuData,
      otherInfo,
      modalConfig,
      contentConfig,
      serachConfig,
      handleChangeCheck,
      handleAddData,
      handleReset,
      handleSearch,
      handleEditData,
      defaultCheckedKeys
    };
  }
});
</script>

<style scoped></style>
