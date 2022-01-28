export const rules = {
  name: [
    {
      required: true,
      message: "请输入用户名~",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "用户名必须是5~10位数字或字母~",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "请输入密码~",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{5,16}$/,
      message: "密码必须是5~16位的数字或者密码组成~",
      trigger: "blur"
    }
  ]
};
