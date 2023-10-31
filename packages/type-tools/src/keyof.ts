// 索引类型查询 keyof 对象中的所有键转换为对应字面量类型
type PointCri = {
  x: number;
  y: number;
};

type P = keyof PointCri;

interface Foo {
  str: 1;
  123: 123;
}
// keyof 的产物是联合类型

type FooKeys = keyof Foo;

// 索引类型访问
interface NumberRecord {
  [key: string]: number;
}
type PropType = NumberRecord[string];

// 映射类型

type Stringify<T> = {
  [k in keyof T]: string;
};
