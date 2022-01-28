import { ISearchType } from "@/base-ui/form/index";

export const serachConfig: ISearchType = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "角色名",
      placeholder: "请输入角色名称"
    },
    {
      field: "intro",
      type: "input",
      label: "权限介绍",
      placeholder: "请输入权限介绍"
    },
    {
      field: "createAt",
      type: "datePicker",
      label: "创建日期",
      otherOptions: {
        type: "datetimerange",
        startPlaceholder: "请选择起始日期",
        endPlaceholder: "请选择结束日期"
      }
    }
  ],
  itemStyle: { padding: "10px 50px 10px 10px" }
};
