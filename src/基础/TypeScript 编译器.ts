function greet(person: string, date: Date) {
  console.log(`${person} ${date.toDateString()}`);
}

greet('name', new Date());

let isAny: any = '123';

function foo(s: string) {
  console.log(s.substring(3));
}
declare const userName: string;

const users = [
  { name: 'Ob', age: 12 },
  { name: 'Nick', age: 10 },
];

const loggedUser = users.find((u) => u.name === userName);

console.log(loggedUser?.age);
