/**
 * 类的主要结构 构造函数 属性 方法 访问符
 */

class ClsMethod {
  // 数据部分
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add() {
    return this.x + this.y;
  }
}
