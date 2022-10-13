// 泛型为类型提供变量

type StringArray = Array<string>;

const sArr: StringArray = ['1', '3'];

/** exam */
function createArray<T>(len: number, val: any): Array<T> {
  let ans: T[] = [];
  for (let i = 0; i < len; i++) {
    ans[i] = val;
  }
  return ans;
}

createArray<string>(3, 'a');

/** swap */

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

/** 泛型约束 */

interface lengthwise {
  length: number;
}

function log<T extends lengthwise>(args: T): T {
  console.log(args.length);
  return args;
}

function identity(arg: number): number {
  return arg;
}

function anyIdentity(arg: any): any {
  return arg;
}

function typeIdentity<T>(params: T): T {
  return params;
}

let output = typeIdentity<string>('123');

function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
let xObj = { a: 1, b: 2, c: 3, d: 4 };
getProp(xObj, 'a');
