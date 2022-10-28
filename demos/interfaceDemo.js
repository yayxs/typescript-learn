// 定义对象
const obj = {
    name: `yayxs`,
    printName: (name) => {
        console.log(name);
    }
};
// 定义方法
const sayName = (o) => {
    console.log(`my name is ${o.name}`);
    o.printName(o.name);
};
sayName(obj);
