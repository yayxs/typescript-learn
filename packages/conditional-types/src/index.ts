// 条件类型
// ValueA = ValueB ? Ret1:Ret2

type MyType<T> = T extends string ? 'string' : 'other';

type Type1 = MyType<'string'>;
type Type2 = MyType<123>;

// export type AType<T> = T extends string ?'string': T extends number ? 'number': T extends boolean ? 'boolean' : T extends null ?'null'

function addFunc<T extends number | string | bigint>(
  x: T,
  y: T
): addFuncType<T> {
  return x + (y as any);
}

export type addFuncType<T> = T extends number
  ? number
  : T extends bigint
  ? bigint
  : T extends string
  ? string
  : never;

type Func = (...args: any[]) => any;
type FuncType<T extends Func> = T extends (...args: any[]) => string
  ? 'fun'
  : 'a';

type ret1 = FuncType<() => string>;
type ret2 = FuncType<() => boolean>;
type ret3 = FuncType<() => number>;
