// 条件类型的兼容性

type Ret = 'string' extends string ? 1 : 2;

// f赋值检查兼容性

declare let strType: string;

declare let anyType: any;

declare let neverType: never;

type Ret1 = 'string' extends string ? 1 : 2;
type Ret2 = 1 extends number ? 1 : 2;
type Ret3 = true extends boolean ? 1 : 2;
type Ret4 = { obj: 'is-obj' } extends object ? 1 : 2;
type Ret5 = { str: string } extends object ? 1 : 2;
type Ret6 = [] extends object ? 1 : 2;

type Ret7 = string extends String ? 1 : 2;
type Ret8 = String extends {} ? 1 : 2;
type Ret9 = {} extends object ? 1 : 2;
type Ret10 = object extends Object ? 1 : 2;

// Top Type

type Ret11 = Object extends any ? 1 : 2;
type Ret12 = Object extends unknown ? 1 : 2;

// 类型层级链

// type TypeChain = never extends 'string-info' ? 'string-info' extends 'string-info' | '123'?'string-info' | '123' extends string

// 派生类会完全保留基类的结构
