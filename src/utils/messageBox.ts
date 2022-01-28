import { ElMessageBox, ElMessage } from "element-plus";
import "element-plus/es/components/message-box/style/css";
import "element-plus/es/components/message/style/css";

export const messageBoxOpen = (message: string) => {
  return ElMessageBox.confirm(message, "警告", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  });
};

export const messageOpen = (type: any, message: string) => {
  ElMessage({
    type,
    message
  });
};
