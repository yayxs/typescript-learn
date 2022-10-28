interface InterfacePerson {
  readonly id: number; // 防止对象的属性被再次赋值修改掉
  name: string;
  age?: number;
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
