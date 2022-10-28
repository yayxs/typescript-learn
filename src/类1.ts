/**
 * 类的主要结构 构造函数 属性 方法 访问符
 */

class MyFriend {
  // 数据类容
  prop: string;
  name: string;
  age: number;
  height: string;

  constructor(inputProp: string) {
    this.prop = inputProp;
  }

  say(name: string): void {
    console.log(`i am ${name}`);
  }

  get propA(): string {
    return `${this.prop} A`;
  }

  set propA(val: string) {
    this.prop = `${val}A`;
  }
}
// new 对象
let vl = new MyFriend('van');
// set 内容
vl.name = `xue-hua`;
// get 内容
console.log(vl.name);
