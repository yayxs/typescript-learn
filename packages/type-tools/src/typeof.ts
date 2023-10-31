const typeofString = 'str';
const typeofObj = { name: 'name' };
const nullVar = null;
const undefVar = undefined;

type Str = typeof typeofString;

const func = (input: string) => {
  return input.length > 10;
};

const func2: typeof func = (name: string) => {
  return name === 'name';
};

const myInfoFn = (info: any) => {
  switch (typeof info) {
    case `number`:
      console.log(`number`);
    case `string`:
      console.log(`string`);
    default:
  }
};
