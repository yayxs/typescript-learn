const arrayType1: string[] = [];
const arrayType2: Array<string> = [];
const arrayType3: [string, string, string] = ['a', 'a', 'a'];
const arrayType4: [string, number, boolean] = ['string', 1, false];
const arrayType5: [name: string, age: number, male: boolean] = ['a', 12, true]; // 具名元祖
const arrayType6: number[] = [12]; // 子元素是数字类型的数组
const arrayType7: Array<number> = [0]; // Array<elemType> 使用泛型
/** 类型 + [] */
const arrayType8: string[] = ['12']; // 子元素是字符串类型的数组
let arrayType9: number[] = [1, 2];

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
