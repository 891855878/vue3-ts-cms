import { ISearchType } from "@/base-ui/form/index";

export const modalConfig: ISearchType = {
  formItems: [
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
      placeholder: "请输入真实姓名"
    },
    {
      field: "password",
      type: "password",
      label: "密码",
      placeholder: "请输入密码",
      isHidden: false
    },
    {
      field: "cellphone",
      type: "input",
      label: "手机号",
      placeholder: "请输入真实姓名"
    },
    {
      field: "departmentId",
      type: "select",
      label: "部门",
      placeholder: "请选择部门信息",
      options: []
    },
    {
      field: "roleId",
      type: "select",
      label: "角色",
      placeholder: "请选择角色信息",
      options: []
    }
  ],
  itemStyle: { padding: "5px" },
  colLayout: { span: 24 }
};
