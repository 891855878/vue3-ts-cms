export const contentConfig = {
  isShowIndex: true,
  isShowSelect: true,
  title: "",
  propItem: [
    { prop: "name", label: "部门名称", minWidth: "120" },
    { prop: "leader", label: "部门领导", minWidth: "120" },
    { prop: "parentId", label: "上级部门", minWidth: "120" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "250",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "250",
      slotName: "updateAt"
    },
    {
      label: "操作",
      width: "120",
      slotName: "handleTab"
    }
  ]
};
