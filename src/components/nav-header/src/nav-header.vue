<template>
  <div class="nav-header">
    <el-icon class="el-icon" @click="handleFoldClick()"
      ><template v-if="isFold"><expand /></template>
      <template v-else> <fold /></template
    ></el-icon>
    <div class="head-other">
      <div><bread-crumb :breadcrumbs="breadCrumbArr" /></div>
      <div class="head-user">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar :size="30" :src="avatar"></el-avatar>
            <span class="userName">{{ userName }}</span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleExitLogin"
                >退出登录</el-dropdown-item
              >
              <el-dropdown-item divided>用户信息</el-dropdown-item>
              <el-dropdown-item>系统管理</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "@/store/index";
import { Fold, Expand } from "@element-plus/icons-vue";
import BreadCrumb from "@/base-ui/bread-crumb/index";
import localCache from "@/utils/cache";

import { breadCrumbRoute } from "@/utils/map-menus";

export default defineComponent({
  emits: ["handleFold"],
  components: {
    Fold,
    Expand,
    BreadCrumb
  },
  setup(props, { emit }) {
    const router = useRouter();
    const store = useStore();
    const route = useRoute();
    const isFold = ref(false);
    const avatar = ref(
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Fc7%2F8a%2F03%2Fc78a030abf9940543004b4fea7ef3902.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645325586&t=4951b9134f68885ea074c22ffaf56fb2"
    );
    const userName = computed(() => store.state.loginModule.userInfo.name);
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      emit("handleFold", isFold.value);
    };
    const breadCrumbArr = computed(() =>
      breadCrumbRoute(store.state.loginModule.userMenu, route.path)
    );

    console.log(breadCrumbArr.value);

    const handleExitLogin = () => {
      localCache.deleteCache("token");
      router.push("/main");
    };
    return {
      handleFoldClick,
      isFold,
      avatar,
      userName,
      breadCrumbArr,
      handleExitLogin
    };
  }
});
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  display: flex;
  .el-icon {
    font-size: 30px;
  }
  .head-other {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0px 20px;
  }
  .el-dropdown-link {
    display: flex;
    align-items: center;
  }
  .userName {
    padding: 0px 10px;
  }
}
</style>
