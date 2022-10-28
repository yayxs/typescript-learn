// 修饰符
class FriendCls {
  private name: string;
  private age: number;
  constructor(age: number, name: string) {
    this.name = name;
    this.age = age;
  }
  // setter and getter

  public get getName(): string {
    return this.name;
  }
  public set setName(name: string) {
    this.name = name;
  }
}

class ProtectedPerson {
  protected name: string;
  protected age: number;
  protected constructor(name: string, age: number) {
    console.log(`${name}----${age}`);
  }
}
