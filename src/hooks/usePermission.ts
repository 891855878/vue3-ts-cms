import { useStore } from "@/store";
export function usePremission(pageName: string, handleName: string) {
  const store = useStore();
  const premissionArr = store.state.loginModule.premission;
  const verifyPremission = `system:${pageName}:${handleName}`;
  //如果找到相同的权限就返回 否则就返回undefined
  //通过!!将取到的值转换成boolean类型
  return !!premissionArr.find((item) => item === verifyPremission);
}
