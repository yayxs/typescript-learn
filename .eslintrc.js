module.exports = {
  parser: '@typescript-eslint/parser', // 解析器
  plugins: ['@typescript-eslint'], // 插件eslint 默认规则的补充 适用于ts
  rules: {
    'no-var': ['error'],
  },
};
