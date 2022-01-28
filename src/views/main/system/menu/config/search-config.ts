import { ISearchType } from "@/base-ui/form/index";

export const serachConfig: ISearchType = {
  formItems: [
    {
      field: "id",
      type: "input",
      label: "id",
      placeholder: "请输入id"
    },
    {
      field: "name",
      type: "input",
      label: "菜单名称",
      placeholder: "请输入菜单名称"
    },
    {
      field: "url",
      type: "input",
      label: "url路径",
      placeholder: "请输入url路径"
    },
    {
      field: "type",
      type: "select",
      label: "类型",
      placeholder: "请选择类型",
      options: [
        { title: "一级菜单", value: 1 },
        { title: "二级菜单", value: 2 },
        { title: "三级菜单", value: 3 }
      ]
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
