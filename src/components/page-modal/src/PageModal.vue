<template>
  <div class="page-model">
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="30%"
      center
      destroy-on-close
    >
      <ky-form v-bind="modalConfig" v-model="formData"></ky-form>
      <slot> </slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useStore } from "@/store/index";
import KyForm from "../../../base-ui/form/index";

export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    deafultData: {
      type: Object,
      default: () => ({})
    },
    pathName: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  components: { KyForm },
  setup(props) {
    const store = useStore();
    const dialogVisible = ref(false);
    const formData = ref<any>({});
    watch(
      () => props.deafultData,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`];
        }
      },
      { deep: true }
    );
    const handleConfirmClick = () => {
      dialogVisible.value = false;
      if (Object.keys(props.deafultData).length) {
        store.dispatch("systemModule/editPageDataAction", {
          pathName: props.pathName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.deafultData.id
        });
      } else {
        store.dispatch("systemModule/createPageDataAction", {
          pathName: props.pathName,
          newData: { ...formData.value, ...props.otherInfo }
        });
      }
    };
    return { dialogVisible, formData, handleConfirmClick };
  }
});
</script>

<style scoped></style>
