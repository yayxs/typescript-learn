modules.exports = {
  compilerOptions: {
    allowJs: true,
    target: 'es2015', // es3 es5 es6es2015 es2016 es2017 esnext
    // any 提醒
    noImplicitAny: true,
    // 严格的null检查
    strictNullChecks: true,
    baseUrl: './',
    paths: {
      '*': ['types/*'],
    },
  },
};
