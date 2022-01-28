<template>
  <div class="table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <slot name="headerHandle"></slot>
      </slot>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      @selection-change="handleSelectChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="isShowSelect"
        type="selection"
        width="60"
        align="center"
      />
      <el-table-column
        v-if="isShowIndex"
        label="序号"
        type="index"
        width="80"
        align="center"
      />
      <template v-for="item in propItem" :key="item.name">
        <el-table-column align="center" v-bind="item" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">{{
              scope.row[item.prop]
            }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          :page-sizes="[5, 10, 20, 30]"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["changSelection", "update:page"],
  props: {
    title: { type: String, default: "" },
    tableData: { type: Array, required: true },
    propItem: { type: Array, required: true },
    isShowIndex: { type: Boolean, default: false },
    isShowSelect: { type: Boolean, default: false },
    listCount: { type: Number, deafult: 0 },
    page: { type: Object, default: () => ({ currentPage: 1, pageSize: 10 }) },
    childrenProps: { type: Object, deafult: () => ({}) },
    showFooter: { type: Boolean, default: true }
  },
  setup(props, { emit }) {
    const handleSelectChange = (value: any) => {
      emit("changSelection", value);
    };
    const handleSizeChange = (newPageSize: number) => {
      emit("update:page", { ...props.page, pageSize: newPageSize });
    };
    const handleCurrentChange = (newCurrentPage: number) => {
      emit("update:page", { ...props.page, currentPage: newCurrentPage });
    };
    return { handleSelectChange, handleSizeChange, handleCurrentChange };
  }
});
</script>

<style scoped>
.header {
  display: flex;
  height: 35px;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px 5px 0px;
}
.title {
  font-size: 20px;
  font-weight: 700;
}
.footer {
  height: 30px;
  text-align: right;
  margin-top: 10px;
}
</style>
