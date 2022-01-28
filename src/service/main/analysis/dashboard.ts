import KYRequest from "@/service";

enum BashboardAPI {
  categoryGoodsCount = "/goods/category/count",
  categoryGoodsSale = "/goods/category/sale",
  categoryGoodsFavor = "/goods/category/favor",
  addressGoodsSale = "/goods/address/sale"
}

export function getCategoryGoodsCount() {
  return KYRequest.get({
    url: BashboardAPI.categoryGoodsCount
  });
}
export function getCategoryGoodsSale() {
  return KYRequest.get({
    url: BashboardAPI.categoryGoodsSale
  });
}
export function getCategoryGoodsFavor() {
  return KYRequest.get({
    url: BashboardAPI.categoryGoodsFavor
  });
}
export function getAddressGoodsSale() {
  return KYRequest.get({
    url: BashboardAPI.addressGoodsSale
  });
}
