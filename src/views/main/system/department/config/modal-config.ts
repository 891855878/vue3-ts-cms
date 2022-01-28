import { ISearchType } from "@/base-ui/form/index";

export const modalConfig: ISearchType = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "部门名称",
      placeholder: "请输入部门名称"
    },
    {
      field: "parentId",
      type: "select",
      label: "上级部门",
      placeholder: "请选择上级部门",
      options: []
    },
    {
      field: "leader",
      type: "input",
      label: "领导名称",
      placeholder: "请输入领导名称"
    }
  ],
  itemStyle: { padding: "5px" },
  colLayout: { span: 24 }
};
