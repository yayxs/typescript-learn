function ThrowErr(msg: string): never {
  throw Error(msg);
}

function InfiniteLoop(): never {
  while (true) {}
}
// never 什么都没有的类型 不携带任何类型信息
type WithNever = 'van' | 1 | true | void | never;
