/**
 * type-alias 类型别名
 * 描述对象 类 interface
 * 函数 联合类型 工具类型
 */

type NameString = string;

const isNameS: NameString = `van`;

type UserType = {
  name: string;
  age: number;
  male: boolean;
};

const isMeType: UserType = {
  name: `van`,
  age: 18,
  male: false,
};

type Code = 1000 | 1001;
type Status = 'success' | 'fail';
