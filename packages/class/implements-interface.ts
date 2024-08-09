// 实现多个接口

interface IA {
  name: string;
}
interface IB {
  age: number;
}

class Per implements IA, IB {
  name: string = '123';
  age: number = 9;
}
