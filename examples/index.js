let _name = `zhangsan`;
// console.log(_name)
var a;
a = 123;
let arrString1 = [`yayxs`];
let arrNum = [1, 2, 3];
let tuple;
tuple = [`yayxs`, 18, `男生`];
// console.log(`${tuple[0]}是${tuple[2]}，今年${tuple[1]}`)
const addFn = (a, b = 10) => a + b;
// const addCon = (a: number, b: number): void => console.log(a + b)
const addABC = (a, b, c) => {
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
const arrList = [1, 2, 3, 4];
// 其中acc为累加器；cur当前值
const reducer = (acc, cur) => acc + cur;
let res = arrList.reduce(reducer, 5);
// console.log(res) // 15
const addFun = (a, ...nums) => nums.reduce(reducer, a);
// console.log(addFun(1, 2, 3, 4))
let myInfo;
myInfo = `yayxs`;
myInfo = 18;
const myInfoFn = (info) => {
    switch (typeof info) {
        case `number`:
            console.log(`我今年${info}`);
        case `string`:
            console.log(`我的名字${info}`);
        default:
    }
};
myInfoFn(`yayxs`);
