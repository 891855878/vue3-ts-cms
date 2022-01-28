export const contentConfig = {
  isShowIndex: true,
  isShowSelect: false,
  title: "角色列表",
  propItem: [
    { prop: "name", label: "角色名", minWidth: "100" },
    { prop: "intro", label: "角色权限", minWidth: "100" },
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
