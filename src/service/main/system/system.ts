import KYRequest from "@/service";

import { IDataType } from "@/service/type";

//查询
export function getPageList(url: string, data: any) {
  return KYRequest.post<IDataType>({
    url,
    data
  });
}
//删除
export function deletePageData(url: string) {
  return KYRequest.delete<IDataType>({
    url
  });
}

//新增
export function createPageData(url: string, newData: any) {
  return KYRequest.post<IDataType>({
    url,
    data: newData
  });
}

//编辑
export function editPageData(url: string, editData: any) {
  return KYRequest.patch<IDataType>({
    url,
    data: editData
  });
}
