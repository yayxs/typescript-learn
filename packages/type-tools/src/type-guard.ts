// 类型推导能力 类型的控制流分析

// 类型守卫
function isString(input: unknown): input is string {
  return typeof input === 'string';
}
