// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean

const aString: string = `我是一个字符串`;

const mine: (name: string, age: number, sex: string) => string = (
  name: string,
  age: number,
  sex: string
) => `我的名字是${name},我今年${age},我是${sex}生,欢迎关注我的掘金呦~`;

mine('van', 12, '男');
