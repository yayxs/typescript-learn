/**
 * 类型断言显示告知类型检查程序当前这个变量的类型
 * 语法 as newType
 * 将 any / unknown
 */

let unknownVar1: unknown;

(unknownVar1 as { foo: () => {} }).foo();

const isStr: string = 'van';
(isStr as any).func().foo().a;

function isNumOrStr(target: string | number) {
  if ((target as string).includes('van')) {
  }

  if ((target as number).toFixed() === 'van') {
  }
}

interface IFoo {
  name: string;
}

declare const o: {
  za: IFoo;
};

const { za = {} as IFoo } = o;
