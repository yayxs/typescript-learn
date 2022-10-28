// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean

const aString: string = `我是一个字符串`;
const isStringType: string = 'string-type';

const mine: (name: string, age: number, sex: string) => string = (
  name: string,
  age: number,
  sex: string
) => `my name is ${name}`;

mine('van', 12, '男');
