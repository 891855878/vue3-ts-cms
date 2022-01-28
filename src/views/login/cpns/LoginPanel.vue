<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="loginPanel">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><UserFilled /></el-icon>账号登录
          </span>
        </template>
        <LoginAccount ref="LoginAccountCpn" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><Iphone /></el-icon>手机登录
          </span>
        </template>
        <LoginPhone ref="LoginPhoneCpn" />
      </el-tab-pane>
    </el-tabs>
    <div class="login-password">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="login()"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { UserFilled, Iphone } from "@element-plus/icons-vue";

import LoginAccount from "./LoginAccount.vue";
import LoginPhone from "./LoginPhone.vue";

export default defineComponent({
  components: {
    UserFilled,
    Iphone,
    LoginAccount,
    LoginPhone
  },
  setup() {
    //定义属性
    let isKeepPassword = ref(true);
    const LoginAccountCpn = ref<InstanceType<typeof LoginAccount>>();
    let loginPanel = ref("account");
    const LoginPhoneCpn = ref<InstanceType<typeof LoginPhone>>();
    //定义方法
    const login = () => {
      if (loginPanel.value === "account") {
        LoginAccountCpn.value?.loginAction(isKeepPassword.value);
      } else {
        LoginPhoneCpn.value?.LoginAction();
      }
    };
    return {
      isKeepPassword,
      LoginAccountCpn,
      login,
      loginPanel,
      LoginPhoneCpn
    };
  }
});
</script>

<style scoped lang="less">
.login-panel {
  width: 360px;
  margin-top: -150px;
  .title {
    text-align: center;
  }
  .login-password {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
  .login-btn {
    width: 100%;
    margin-top: 5px;
  }
}
</style>
