import { RouteRecordRaw } from "vue-router";

import { IBreadcrumb } from "@/base-ui/bread-crumb/index";

let firstRoute: any = null;
export function mapMenuToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  const allRoutes: RouteRecordRaw[] = [];
  const routeFiles = require.context("../router/main", true, /\.ts/);
  routeFiles.keys().forEach((key) => {
    const route = require("../router/main" + key.replace(".", ""));
    allRoutes.push(route.default);
  });

  function _recursionGetRoute(menu: any[]) {
    for (const item of menu) {
      if (item.type == 2) {
        const route = allRoutes.find((route) => {
          return item.url == route.path;
        });
        if (route) routes.push(route);
        if (!firstRoute) {
          firstRoute = item;
        }
      } else {
        _recursionGetRoute(item.children);
      }
    }
  }
  _recursionGetRoute(userMenus);

  return routes;
}

export function pathMapToRoute(
  userMenu: any[],
  currentRoute: string,
  breadCrumb?: IBreadcrumb[]
): any {
  for (const menu of userMenu) {
    if (menu.type === 1) {
      const acMenu = pathMapToRoute(menu.children, currentRoute);
      if (acMenu) {
        breadCrumb?.push({ name: menu.name });
        breadCrumb?.push({ name: acMenu.name });

        return acMenu;
      }
    } else if (menu.type === 2 && menu.url === currentRoute) {
      return menu;
    }
  }
}

export function breadCrumbRoute(userMenu: any[], currentRoute: string) {
  const breadCrumb: IBreadcrumb[] = [];
  pathMapToRoute(userMenu, currentRoute, breadCrumb);
  return breadCrumb;
}

export function getPermission(userMenu: any[]) {
  const permissionArr: any[] = [];
  const _recureGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recureGetPermission(menu.children ?? []);
      } else {
        permissionArr.push(menu.permission);
      }
    }
  };
  _recureGetPermission(userMenu);
  return permissionArr;
}
export function getMenuListId(menuList: any[]) {
  console.log(menuList);

  const leafKeys: number[] = [];
  const _recureGetMenuListId = (menu: any[]) => {
    for (const item of menu) {
      if (item.children) {
        _recureGetMenuListId(item.children);
      } else {
        leafKeys.push(item.id);
      }
    }
  };
  _recureGetMenuListId(menuList);

  return leafKeys;
}
export { firstRoute };
