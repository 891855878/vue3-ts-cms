<template>
  <div class="login-phone">
    <el-form label-width="70px" :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num" maxlength="11"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" maxlength="6"></el-input>
          <el-button class="get-btn" type="primary" @click="getCode"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { rules } from "../config/login-phone";
// import {}
// import { phoneLogin } from "@/service/login/login";

export default defineComponent({
  setup() {
    const store = useStore();
    let code: any;
    const phone = reactive({
      num: "",
      code: ""
    });
    const LoginAction = () => {
      // const phoneCode = code +
      if (phone.code == code) {
        console.log(`登录成功验证码位：${code}`);
      }
    };

    const getCode = () => {
      code = Math.random();
      while (code < 0.1) {
        code = Math.random();
      }
      code = Math.floor(code * 1000000);
      const phoneNum = phone.num;

      store.dispatch("loginModule/phoneLoginAction", { phoneNum, code });
    };
    return { phone, rules, LoginAction, getCode };
  }
});
</script>

<style scoped lang="less">
.get-code {
  display: flex;
}
.get-btn {
  margin-left: 15px;
}
</style>
