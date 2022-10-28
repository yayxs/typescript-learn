// 函数声明
function helloTs(name: string): number {
  return name.length;
}

// 函数表达式

const helloTS1 = function (name: string): number {
  return name.length;
};

// (name: string) => number 函数类型签名
const helloTS2: (name: string) => number = function (name) {
  return name.length;
};

type FuncHello = (name: string) => number;

const helloTs3: FuncHello = (name) => {
  return name.length;
};

function func(): void {}

// 调用了return 没有返回值

function funcVoid(): void {
  return;
}

/**
 * 函数重载
 */
// function getParams1(name: string): string;
// function hello(age: number): number;

function hello(foo: number, bar?: boolean): string | number {
  if (bar) {
    return '1';
  } else {
    return 0;
  }
}

// 函数重载签名

function isA(foo: number, bar: true): string; // 重载签名一
function isA(foo: number, bar?: false): number;
function isA(foo: number, bar?: boolean): string | number {
  if (bar) {
    return '1';
  } else {
    return 0;
  }
}

// 异步函数
async function asyncFunc(): Promise<void> {}

function* genFunc(): Iterable<void> {}
