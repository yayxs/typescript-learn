type Func = (...args: any[]) => any;

// infer 意为推断
type FunctionReturnType<T extends Func> = T extends (...args: any[]) => infer R
  ? R
  : never;

type Swap<T extends any[]> = T extends [infer A, infer B] ? [B, A] : T;

type SwapRet1 = Swap<[1, 2]>;

type SwapRet2 = Swap<[1, 2, 3]>;

// 提取数组的

type TypeStartAndEnd<T extends any[]> = T extends [
  infer Start,
  ...any[],
  infer End
]
  ? [Start, End]
  : T;

// 调换开头两个

type SwapFirstTwo<T extends any[]> = T extends [
  infer Start1,
  infer Start2,
  ...infer Left
]
  ? [Start2, Start1, ...Left]
  : T;

type ArrayItemType<T> = T extends Array<infer ElementType>
  ? ElementType
  : never;
// 提取对象的属性类型

type PropType<T, K extends keyof T> = T extends { [Key in K]: infer R }
  ? R
  : never;

type PropTypeRes1 = PropType<{ name: string }, 'name'>;
type PropTypeRes2 = PropType<{ name: string; age: number }, 'name' | 'age'>;

type PromiseValue<T> = T extends Promise<infer V> ? V : T;

type PromiseRes1 = PromiseValue<Promise<number>>;
type PromiseRes2 = PromiseValue<number>;

/**
 * infer 关键字被使用在嵌套的场景中，对类型结构深层信息的提取，以及对提取类型信息的筛选
 */

type PromiseValue1<T> = T extends Promise<infer V>
  ? V extends Promise<infer N>
    ? N
    : V
  : T;

// 分布式条件类型
// 条件类型的分布式特性

type Condition<T> = T extends 1 | 2 | 3 ? T : never;
type Res1 = Condition<1 | 2 | 3>;

export type TypeC<T> = T & {};

type WrapTypeC<T> = TypeC<T> extends boolean ? 'y' : 'n';

type Compare<T, U> = [T] extends [U] ? true : false;

type IsNever<T> = [T] extends [never] ? true : false;

type IsNeverRes1 = IsNever<never>;
type IsNeverRes2 = IsNever<'string'>;

type tmp1 = any extends string ? 1 : 2;

type tmp2<T> = T extends string ? 1 : 2;
