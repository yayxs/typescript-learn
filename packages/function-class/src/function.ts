function funcType(name: string): number {
  return name.length; //
}
const funcType1 = function (name: string): number {
  return name.length;
};

// (name: string) => number 函数类型签名
const funcType2: (name: string) => number = function (name) {
  return name.length;
};

const addFn = (a: number, b: number = 10): number => a + b;
const addCon = (a: number, b: number): void => console.log(a + b);

type funcFoo = (name: string) => number;

const funcType3: funcFoo = (name) => {
  return name.length;
};

function funcType4(name: string, age?: number): number {
  return name.length + age;
}
function funcType5(name: string, age: number = 12): number {
  return 12;
}
function funcType6(name: string, ...rest: any[]) {}

// 函数重载

function funcType7(num: number, bol: true): string;
function funcType7(num: number, bol?: false): number;
function funcType7(num: number, bol?: boolean): number | string {
  if (bol) {
    return String('1');
  } else {
    return '1';
  }
}

/**
 * 函数声明
 */
function sumFunc(x: number, y: number): number {
  return x + y;
}

/**
 * 函数表达式
 */
const addFunc: (x: number, y: number) => number = (x: number, y: number) => {
  return x + y;
};

function fn(): void {}

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

interface Entity {
  add: (a: number, b: number) => number;
  del(a: number, b: number): number;
}

const entity: Entity = {
  add: (a, b) => a + b,
  del(a, b) {
    return a - b;
  },
};
/**
 * @param x 可选参数
 */
function log1(x?: string) {
  console.log(x);
}

/**
 *
 * @param x 限定为string 或者 undefined
 */
function log2(x: string | undefined) {}

/**
 *
 * @param x 默认参数
 */
function log3(x: number | string = 'default') {}

function sum(first: number, ...nums: number[]) {
  console.log(first);
  console.log(nums);
}

sum(1, 2);

/**
 * 函数重载
 */
