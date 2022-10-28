// 泛型为类型提供变量
const sArr = ['1', '3'];
/** exam */
function createArray(len, val) {
    let ans = [];
    for (let i = 0; i < len; i++) {
        ans[i] = val;
    }
    return ans;
}
createArray(3, 'a');
/** swap */
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
function log(args) {
    console.log(args.length);
    return args;
}
function identity(arg) {
    return arg;
}
function anyIdentity(arg) {
    return arg;
}
function typeIdentity(params) {
    return params;
}
let output = typeIdentity('123');
function getProp(obj, key) {
    return obj[key];
}
let xObj = { a: 1, b: 2, c: 3, d: 4 };
getProp(xObj, 'a');
