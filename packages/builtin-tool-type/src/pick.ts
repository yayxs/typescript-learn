/**
 * 
 * 两个泛型参数
 * 
 * ```ts
 * type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
 * ```
 */

// type Omit<>

// pick 接受两个泛型参数，T即是我们会进行结构处理的原类型
// K 被约束为 T 类型的键名联合类型

interface Foo {
  name: string;
  age: number;
}

type PickedFoo = Pick<Foo, 'age' | 'name'>;

// type Pick<T> = {
//   [P ]
// }

/**
 * Pick 是保留这些传入的键，从庞大的结构中选择少数字段保留
 */

/**
 * Omit 是移除这些传入的键
 * type Omit<T,K extends keyof any> = Pick<T,Exclude<keyof T,K>>
 */

// type Omit<T,K >

// Omit 是基于Pick实现的
