import { App } from "vue";
import globalPropeties from "./register-properties";

export default function registerGlobal(app: App) {
  app.use(globalPropeties);
}
