export const rules = {
  num: [
    {
      required: true,
      message: "请输入手机号~",
      trigger: "blur"
    },
    {
      pattern: /^1[0-9]{10}$/,
      message: "手机号必须是11位的数字~",
      trigger: "blur"
    }
  ],
  code: [
    {
      required: true,
      message: "请输入验证码~",
      trigger: "blur"
    },
    {
      pattern: /^[0-9]{6}$/,
      message: "验证码必须是6位的数字~",
      trigger: "blur"
    }
  ]
};
