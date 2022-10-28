/**
 * 类型断言
 */
const aArr = [1, 2, 3, 4];
function getName(animal) {
    return animal.name;
}
// function isFish(animal: Cat | Fish) {
//     if(typeof animal.swim === 'function'){
//         return true
//     }
//     return false
// }
function isFish(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
class ApiError extends Error {
    code = 0;
}
class HttpError extends Error {
    statusCode = 200;
}
window.foo = 1;
const myCanvas = document.getElementById('main_canvas');
