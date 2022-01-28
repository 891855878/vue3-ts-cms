export const contentConfig = {
  isShowIndex: false,
  isShowSelect: false,
  title: "菜单列表",
  propItem: [
    { prop: "name", label: "菜单名称", minWidth: "100" },
    { prop: "type", label: "类型", minWidth: "60" },
    { prop: "url", label: "url路径", minWidth: "120" },
    { prop: "icon", label: "图标", minWidth: "100" },
    { prop: "permission", label: "权限", minWidth: "100" },
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
  ],
  childrenProps: {
    rowKey: "id",
    treeProps: { children: "children" }
  },
  showFooter: false
};
