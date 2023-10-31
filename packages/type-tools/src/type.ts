// 类型工具：对类型进行处理的工具  类型创建 + 类型安全保护
// 操作符、关键字、专用语法
// 类型工具包 类型别名、交叉类型、索引类型、映射类型

type A = string;

type RetCode = 100 | 200 | 400 | 502;

type DataTypes = string | number | (() => unknown);
// 抽离函数

type Handler = (e: Event) => void;

// 对象类型

type ObjType = {
  name: string;
  age: number;
};
// 类型别名中声明自己接受的泛型 泛型坑位 一旦接受了泛型 工具类型

type TypeA<T> = T | number | string;
const typeA: TypeA<boolean> = true;

type TypeB = TypeA<boolean>;

const typeB: TypeB = false;

type MaybeNull<T> = T | null;

type MaybeArray<T> = T | T[];

// 函数泛型

function printInfo<T>(params: MaybeArray<T>): T[] {
  return Array.isArray(params) ? params : [params];
}

interface IName {
  name: string;
}

interface IAge {
  age: number;
}

type IProfile = IName & IAge;

const me: IProfile = {
  name: 'van',
  age: 12,
};

type StringAndNum = string & number;

type Type1 = {
  prop: string;
  objectProp: {
    name: string;
  };
};

type Type2 = {
  prop: string;
  objectProp: {
    age: number;
  };
};

type Composed = Type1 & Type2;

// 索引签名类型 键值类型一致的类型
interface AllStringTypes {
  [key: string]: string;
}

type AllStringType = {
  [key: string]: string;
};

const foo: AllStringTypes = {
  key: '1',
};

interface IAllStr {
  // prop: number;
  [key: string]: boolean;
}
