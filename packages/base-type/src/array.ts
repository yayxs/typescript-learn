const arrType1: string[] = [];
const arrType2: Array<string> = [];
const arrType3: [string, string, string] = ['a', 'a', 'a'];
const arrType4: [string, number, boolean] = ['string', 1, false];
const arrType5: [name: string, age: number, male: boolean] = ['a', 12, true]; // 具名元祖

let contIsNum: number[] = [12]; // 子元素是数字类型的数组

/**
 * 这就需要重点说一下，毕竟在`js` 中很少提到,习惯上用 `T` 来表示
 * Array<elemType>
 */
const cntIsNUm: Array<number> = [34]; // 使用泛型

/** 类型 + [] */
const contIsStr: string[] = ['12']; // 子元素是字符串类型的数组
let cci: number[] = [1, 2];

/**
 * 接口表示数组
 */

interface NumberArray {
  [index: number]: number;
}

let na: NumberArray = [1, 2];

/**
 * 类数组 an
 */

interface Args {
  [index: number]: number;
  length: number;
  callee: Function;
}

function sumArray(): void {
  let args: Args = arguments;
  console.log('a');
}

/** any在数组中的应用 */
const list: any[] = [1, '2'];
