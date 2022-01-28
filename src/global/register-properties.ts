import { App } from "vue";
import formatDate from "@/utils/format-data";

export default function globalPropeties(app: App) {
  app.config.globalProperties.$filters = {
    foo() {
      console.log("foo");
    },
    formatData(value: string) {
      return formatDate(value);
    }
  };
}
