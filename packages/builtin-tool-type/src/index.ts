/**
 * 工具类型的分类
 * 对属性的修饰：包括对象属性和数组元素的可选 必选 只读 可写 属性修饰工具类型
 * 对既有类型的裁剪、拼接、转换、 结构工具类型
 * 对集合 联合类型的处理 交集 并集 差集 补集 集合工具类型
 * 基于infer 的模式匹配
 * 模板字符串专属的工具类型
 */

// 访问性修饰工具
type TypePartial<T> = {
  [P in keyof T]?: T[P]; // 可选
};

type TypeRequired<T> = {
  [P in keyof T]-?: T[P];
};

type TypeReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Foo {
  opt: string | undefined;
  required: string;
}
