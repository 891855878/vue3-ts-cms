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
      label: "用户名",
      placeholder: "请输入用户名"
    },
    {
      field: "realname",
      type: "input",
      label: "真实姓名",
      placeholder: "请输入手机号"
    },
    {
      field: "cellphone",
      type: "input",
      label: "手机号",
      placeholder: "请输入真实姓名"
    },
    {
      field: "enable",
      type: "select",
      label: "状态",
      placeholder: "请选择状态",
      options: [
        { title: "启用", value: 1 },
        { title: "禁用", value: 0 }
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
