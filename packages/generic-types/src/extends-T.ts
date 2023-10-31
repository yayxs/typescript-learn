type ResStatus<ResCode extends number> = ResCode extends 1000 | 10001 | 10002
  ? 'success'
  : 'fail';

type TypeX<Type, Condition, FalsyRes> = Type extends Condition
  ? FalsyRes
  : Type;
