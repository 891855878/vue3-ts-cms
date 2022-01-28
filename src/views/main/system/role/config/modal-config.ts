import { ISearchType } from "@/base-ui/form/index";

export const modalConfig: ISearchType = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "角色名",
      placeholder: "请输入角色名"
    },
    {
      field: "intro",
      type: "input",
      label: "角色介绍",
      placeholder: "请输入角色介绍"
    }
  ],
  itemStyle: { padding: "5px" },
  colLayout: { span: 24 }
};
