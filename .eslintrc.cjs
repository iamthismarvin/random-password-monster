/* eslint-env node */
module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'prettier'],
  env: {
    'vue/setup-compiler-macros': true,
  },
}
