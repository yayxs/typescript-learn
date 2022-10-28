function greet(person, date) {
    console.log(`${person} ${date.toDateString()}`);
}
greet('name', new Date());
let isAny = '123';
function foo(s) {
    console.log(s.substring(3));
}
const users = [
    { name: 'Ob', age: 12 },
    { name: 'Nick', age: 10 },
];
const loggedUser = users.find((u) => u.name === userName);
console.log(loggedUser?.age);
