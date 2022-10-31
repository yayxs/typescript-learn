interface InterfacePerson {
  readonly id: number; // 防止对象的属性被再次赋值修改掉 只读
  name: string;
  age?: number; // 可选
  male: boolean;
  [propName: string]: any;
  func?: Function; // 标记属性为可选
}

const isP: InterfacePerson = {
  id: 123,
  name: 'tom',
  age: 12,
  male: true,
  gender: 'male',
};

interface IHasName {
  name: string;
  printName?(name: string): void;
}
// 定义对象
const nameObject = {
  name: `yayxs`,
  printName: (name: string) => {
    console.log(name);
  },
};
// 定义方法

const sayName = (o: IHasName) => {
  console.log(`my name is ${o.name}`);
  o.printName(o.name);
};

sayName(nameObject);
