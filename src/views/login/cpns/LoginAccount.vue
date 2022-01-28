<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="elFromCpn">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          show-password
          v-model="account.password"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { ElForm } from "element-plus";
import { rules } from "../config/login-account";
import localCache from "@/utils/cache";
export default defineComponent({
  setup() {
    const store = useStore();
    let account = reactive({
      name: localCache.getCache("name") ?? "",
      password: localCache.getCache("password") ?? ""
    });

    const loginAction = (isKeepPassword: boolean) => {
      elFromCpn.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            localCache.setCache("name", account.name);
            localCache.setCache("password", account.password);
          } else {
            localCache.deleteCache("name");
            localCache.deleteCache("password");
          }

          store.dispatch("loginModule/accountLoginAction", { ...account });
        }
      });
    };
    const elFromCpn = ref<InstanceType<typeof ElForm>>();

    return { account, rules, loginAction, elFromCpn };
  }
});
</script>

<style scoped></style>
