export const contentConfig = {
  isShowIndex: true,
  isShowSelect: false,
  title: "商品列表",
  propItem: [
    { prop: "name", label: "商品名", minWidth: "100" },
    { prop: "oldPrice", label: "原价格", minWidth: "80" },
    { prop: "newPrice", label: "新价格", minWidth: "80" },
    { prop: "status", label: "状态", minWidth: "100", slotName: "status" },
    { prop: "imgUrl", label: "图片", minWidth: "100", slotName: "image" },
    { prop: "desc", label: "描述", minWidth: "100" },
    { prop: "address", label: "地区", minWidth: "100" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "200",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "200",
      slotName: "updateAt"
    },
    {
      label: "操作",
      width: "120",
      slotName: "handleTab"
    }
  ]
};
