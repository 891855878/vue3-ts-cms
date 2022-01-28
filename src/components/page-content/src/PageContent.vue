<template>
  <div class="page-content">
    <KyTable
      :tableData="dataList"
      @changSelection="handleSelection"
      v-bind="contentConfig"
      :listCount="dataCount"
      v-model:page="pageInfo"
    >
      <template #headerHandle>
        <div>
          <el-button type="primary" v-if="isCreate" @click="addPageData">{{
            addName
          }}</el-button>
        </div>
      </template>
      <!-- 行内的插槽 -->
      <template #status="scope">
        <el-button
          size="small"
          :type="scope.row.enable || scope.row.status ? 'success' : 'danger'"
          plain
          >{{
            scope.row.enable || scope.row.status ? "启动" : "禁用"
          }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatData(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatData(scope.row.createAt) }}</span>
      </template>
      <template #handleTab="scope">
        <div class="handleTab">
          <el-button
            type="text"
            size="small"
            v-if="isUpdate"
            @click="editPageData(scope.row)"
            ><el-icon><edit /></el-icon>编辑</el-button
          >
          <el-button
            type="text"
            size="small"
            v-if="isDelete"
            @click="deletePageData(scope.row)"
            ><el-icon><delete /></el-icon>删除</el-button
          >
        </div>
      </template>
      <template
        v-for="item in otherSlotName"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </KyTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";

import { Edit, Delete } from "@element-plus/icons-vue";
import KyTable from "@/base-ui/table/index";
import { useStore } from "@/store/index";
import { usePremission } from "@/hooks/usePermission";
import { messageBoxOpen, messageOpen } from "@/utils/messageBox";

export default defineComponent({
  emits: ["handleAddData", "handleEditData"],
  props: {
    contentConfig: {
      type: Object,
      required: true
    },
    pathName: {
      type: String,
      required: true
    },
    addName: {
      type: String,
      required: true
    }
  },
  components: {
    KyTable,
    Edit,
    Delete
  },
  setup(props, { emit }) {
    const store = useStore();
    const pageInfo = ref({ currentPage: 1, pageSize: 10 });
    const isCreate = usePremission(props.pathName, "create");
    const isDelete = usePremission(props.pathName, "delete");
    const isUpdate = usePremission(props.pathName, "update");
    const isQuery = usePremission(props.pathName, "query");

    watch(
      pageInfo,
      () => {
        getPageListData();
      },
      { deep: true }
    );

    const getPageListData = (value: any = {}) => {
      if (!isQuery) {
        return;
      }
      store.dispatch("systemModule/getPageListAction", {
        pathName: props.pathName,
        data: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...value
        }
      });
    };
    getPageListData();

    const dataList = computed(() =>
      store.getters["systemModule/getPageListDate"](props.pathName)
    );
    const dataCount = computed(() =>
      store.getters["systemModule/getPageListCount"](props.pathName)
    );
    const handleSelection = (value: any) => {
      console.log(value);
    };
    const otherSlotName = props.contentConfig.propItem.filter((item: any) => {
      if (
        item.slotName === "status" ||
        item.slotName === "createAt" ||
        item.slotName === "updateAt" ||
        item.slotName === "handleTab"
      ) {
        return false;
      }
      return true;
    });

    const deletePageData = (item: any) => {
      messageBoxOpen("你确定要删除吗")
        .then(() => {
          store.dispatch("systemModule/deletePageDataAction", {
            pathName: props.pathName,
            id: item.id
          });
          messageOpen("success", "删除成功");
        })
        .catch(() => {
          messageOpen("info", "删除失败");
        });
    };
    const addPageData = () => {
      emit("handleAddData");
    };
    const editPageData = (item: any) => {
      emit("handleEditData", item);
    };

    return {
      dataList,
      handleSelection,
      getPageListData,
      dataCount,
      pageInfo,
      otherSlotName,
      isCreate,
      isDelete,
      isUpdate,
      deletePageData,
      addPageData,
      editPageData
    };
  }
});
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
