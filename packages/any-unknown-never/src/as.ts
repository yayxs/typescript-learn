/**
 * 类型断言显示告知类型检查程序当前这个变量的类型
 * 语法 as newType
 * 将 any / unknown
 */

// as NewType
let unknownVar1: unknown;

(unknownVar1 as { foo: () => {} }).foo();

const isStr: string = 'van';
(isStr as any).func().foo().a;
// 断言具体的一个分支

function func1(input: string | number) {
  if ((input as string).includes('')) {
    console.log();
  }

  if ((input as number).toFixed() === '1') {
  }
}

interface IFoo {
  name: string;
}

declare const asObj: {
  foo: IFoo;
};

const { foo = {} as IFoo } = asObj;
