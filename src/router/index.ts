import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import localCache from "@/utils/cache";

import { firstRoute } from "@/utils/map-menus";

const login = () => import("@/views/login/Login.vue");
const main = () => import("@/views/main/Main.vue");
const notFound = () => import("@/views/notfound/NotFound.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/main",
    name: "main",
    component: main
  },
  {
    path: "/:pathMatch(.*)",
    name: "not-found",
    component: notFound
  }
];
const router = createRouter({
  routes,
  history: createWebHistory()
});
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token");
    //如果跳转嵌套页面发现没有登录则先登录
    if (!token) {
      return "/login";
    }
  }

  if (to.path === "/main") {
    return firstRoute.url;
  }
});
export default router;
