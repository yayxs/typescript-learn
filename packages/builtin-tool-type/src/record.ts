// 结构声明、结构处理

// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// };

// 键名是字符串，键值是未知类型
type Record1 = Record<string, unknown>;

type Record2 = Record<string, any>;
type Record3 = Record<string | number, any>;

type Record4 = Record<string, unknown>; // 代替object

type Record5 = Record<string, any>; // object

// 结构声明工具类型

type Dic<T> = {
  [index: string]: T;
};

type NumDic<T> = {
  [index: number]: T;
};
