/// 可选参数
type PerInfo = string;
interface Person {
  name: PerInfo;
  age?: number;
  sex: PerInfo;
  printName(): void;
  printAge?(): void;
}

class Me implements Person {
  name = '123';
  sex = '1';

  printName() {}
}

let m = new Me();
