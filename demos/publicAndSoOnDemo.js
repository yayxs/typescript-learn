// 公共，私有与受保护的修饰符
class Person {
    name;
    age;
    getName() {
        console.log(this.name);
    }
    setName(name) {
        this.name = name;
    }
    sayName() {
        console.log(`my name is ${this.name}`);
    }
    sayAge() {
        console.log(`my age is ${this.age}`);
    }
}
let p = new Person();
p.setName(`yayxs`);
p.getName();
