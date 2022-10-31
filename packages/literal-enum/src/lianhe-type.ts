// 联合类型 一组类型的可用集合 属于联合类型的成员之一
// 函数类型括号括起来
// 函数类型不存在字面量类型、合法的函数类型
interface Temp {
  mixed: true | string | 12 | {} | (() => {}) | (1 | 2);
}

// 多个对象类型的联合，实现手动的互斥属性，有字段1 没有字段2

interface Tmp {
  user:
    | {
        vip: true;
        a: string;
      }
    | {
        vip: false;
        b: string;
      };
}

declare const t: Tmp;
