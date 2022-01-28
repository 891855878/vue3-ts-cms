import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

import { setupStore } from "./store/index";
import registerGlobal from "./global";
// import KYRequest from "./service";
//css
import "normalize.css";
import "./assets/css/index.less";
// import elementPlus from "element-plus";
// import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";

setupStore();
const app = createApp(App);
app.use(router);
app.use(store);
app.use(registerGlobal);
app.use(ElementPlus, {
  locale: zhCn
});
app.mount("#app");
