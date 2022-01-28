import { ref } from "vue";
import PageContent from "@/components/page-content";
export function usePageSearch() {
  const pageContentCpn = ref<InstanceType<typeof PageContent>>();
  const handleReset = () => {
    pageContentCpn.value?.getPageListData();
  };
  const handleSearch = (value: any) => {
    pageContentCpn.value?.getPageListData(value);
  };

  return [pageContentCpn, handleReset, handleSearch];
}
