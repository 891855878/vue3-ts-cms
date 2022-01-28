import { ref } from "vue";
import PageModal from "@/components/page-modal";
type callbackFn = (value?: any) => void;
export function usePageModal(
  newCallBackFn?: callbackFn,
  editCallbackFn?: callbackFn
) {
  const pageModalCpn = ref<InstanceType<typeof PageModal>>();
  const deafultData = ref({});
  const handleAddData = () => {
    deafultData.value = {};
    newCallBackFn && newCallBackFn();
    if (pageModalCpn.value) {
      pageModalCpn.value.dialogVisible = true;
    }
  };

  const handleEditData = (item: any) => {
    deafultData.value = { ...item };

    if (pageModalCpn.value) {
      pageModalCpn.value.dialogVisible = true;
    }

    editCallbackFn && editCallbackFn(item);
  };

  return [pageModalCpn, deafultData, handleAddData, handleEditData];
}
