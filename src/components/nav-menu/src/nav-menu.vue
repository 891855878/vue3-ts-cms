<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title" v-if="!collapse">VUE3+TS</span>
    </div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      :collapse="collapse"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMenu" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <template v-if="item.icon">
                <template v-if="item.icon == 'el-icon-monitor'">
                  <el-icon><monitor /></el-icon>
                </template>
                <template v-if="item.icon == 'el-icon-setting'">
                  <el-icon><setting /></el-icon>
                </template>
                <template v-if="item.icon == 'el-icon-goods'">
                  <el-icon><goods /></el-icon>
                </template>
                <template v-if="item.icon == 'el-icon-chat-line-round'">
                  <el-icon><chat-line-round /></el-icon>
                </template>
              </template>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                :index="subItem.id + ''"
                @click="handleRouteClick(subItem)"
                >{{ subItem.name }}</el-menu-item
              >
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.id + ''">
            {{ item.name }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import {
  Setting,
  Monitor,
  Goods,
  ChatLineRound
} from "@element-plus/icons-vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "@/store";

import { pathMapToRoute } from "@/utils/map-menus";

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  components: { Setting, Monitor, Goods, ChatLineRound },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const userMenu = computed(() => store.state.loginModule.userMenu);
    const activeRoute = pathMapToRoute(userMenu.value, route.path);

    const defaultActive = ref(activeRoute.id + "");
    const handleRouteClick = (item: any) => {
      router.push(item.url ?? "/not-found");
    };

    return { userMenu, handleRouteClick, defaultActive };
  }
});
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      // font-weight: 700;
      color: white;
    }
  }

  // 目录
  .el-menu {
    border-right: none;
  }
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
