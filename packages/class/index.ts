/**
 * 顶层声明的属性 x 和 y
 * {
  "compilerOptions": {
    "strictNullChecks": true,
    "strictPropertyInitialization": true
  }
}

 */
class Point {
  // 类的属性在顶层声明
  x!: number; // 声明给出类型
  y!: number; // 不给类型默认是 any
  z = 12; // 声明时候给出初始值
}

class A {
  readonly id = '1';
}
const a = new A();

// A.id = '123'

/**
 * 初始值 id
 */

class B {
  readonly id: string = '1';
  constructor(id: string) {
    this.id = '2'; // 写在构造方法里
  }
}

const b = new B('1');
console.log('-----------', b.id);
