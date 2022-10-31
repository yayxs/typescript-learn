/**
 * void 表示空类型
 * null 和 undefined 都是具有意义的实际类型
 * un
 */

/**
 * void 它仅适用于表示没有返回值的函数
 */

/**
 * undefined 它表示一个可缺省、未定义的属性
 */

/**
 * null 接口定制
 */

const userInfo: { name: null | string } = {
  name: null,
};
function func1() {}

function func2() {}

function func3(): undefined {
  return undefined;
}

function func4(): void {}
