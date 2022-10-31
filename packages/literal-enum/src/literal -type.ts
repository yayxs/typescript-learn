/**
 * 字面量类型：字符串字面量类型、数字字面量类型、布尔字面量类型、对象字面量类型
 */
interface IRes {
  code: 10000 | 10001 | 50000;
  status: 'success' | 'fail'; // 字面量类型 literal types
  data: any;
}

// 快速生成符合指定类型、但没有实际值的变量
declare const response: IRes;

if (response.status === 'success') {
  console.log('res-status');
}

type BoolType = true | false;

function printId(id: number | string) {}

interface Tmp {
  bool: true | false;
  num: 1 | 2 | 3;
  str: 'van' | 'lee';
}

/**
 * 联合类型：一组类型的可用集合
 */

interface TmpI {
  mixed: true | string | 123 | {} | (1 | 2);
}

const string1: 'string' = 'string';
