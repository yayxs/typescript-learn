// 条件类型和 infer

type FunctionType = (...args: any) => any;

type ParamsType<T extends FunctionType> = T extends (...args: infer P) => any
  ? P
  : never;
