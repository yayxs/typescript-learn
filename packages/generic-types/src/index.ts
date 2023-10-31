type TypeT<T> = T | number | string;

/**
 * {
 *  'name':'name',
 *  'age':'age'
 * }
 */

type StringTypeT<T> = {
  [K in keyof T]: string;
};
type Clone<T> = {
  [K in keyof T]: T[K];
};

type PartialT<T> = {
  [P in keyof T]?: T[P];
};

// 条件类型

type TypeC<T> = T extends true ? 1 : 2;
// 泛型约束与默认值

type TypeD<T = boolean> = T | number | string;
