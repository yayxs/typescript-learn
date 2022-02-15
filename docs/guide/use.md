## 开始使用

开始 玩无非就是简单的 demo 然后在 vue 中的应用 在 react 中的应用 其次生态 玩一玩生态，大体是要简单的写写 ts 的代码，我现在在看说唱，我们这样，定义一个对象，然后数一数 rapper

```typescript
const rappers = {
    first:"subs"，
    sec:'彤彤',
    thir:"姜云升"
}
```

我们 getter 读取每一个说唱歌手，

```
console.log(rappers['sec'])
```

这时候我们直接打印第四个歌手，可能会出问题，你都学 ts js 的基本类型应该晓得，参见 top-fe-iqa

```js
boolean，bigint，null，number，string，symbol，object，和undefined
```

这里重点说一下，类型

```
Number	双精度IEEE 754浮点数。
String	一个不变的UTF-16字符串。
BigInt	任意精度格式的整数。
Boolean	true和false。
Symbol	通常用作键的唯一值。
Null	等同于单位类型。
Undefined	也等同于单位类型。
Object	类似于记录。
```

ts 不愧是 ts 在定义类型的时候，简单的扩展了几种 一是 any [`unknown`](https://www.typescriptlang.org/play#example/unknown-and-never) never void 现在没必要知道怎么用

我们使用接口来编写这个对象的类型

```typescript
interface IRappers {
  first: string;
  sec: string;
}
```

可以通俗的解释，通过接口来描述你当前的对象

```
const rappers:IRappers = {

}
```

除了接口 也有 type ，至于两者有什么区别，现阶段不必要纠结，还有一种场景 一个数据它比较复杂，不是简单布尔或者对象，这时候我们就要构造一个相对复杂的类型修饰 **联合** **泛型 **

当然上文出现的关键词后边会讲到

```typescript
interface IAdd {
  x: number;
  y: number;
}

const add = (data: IxAdd) => {
  return data.x + data.y;
};

add({ x: 1, y: 2 });
```

两数相加的场景，两个输入框一个相加的按钮，

- 首先保证相加的两个部分都是数值类型数字类型的我们知道两个字符串数字相加的达不到效果
- 逆向思维 先写一段 ts 代码 然后 编译一下

```

```

**遇到的问题**

```
tsc .\first-ts.ts
+ ~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

这时候无非是一些终端的权限问题

- 用管理员权限打开 vscode

- 然后修改权限 set-ExecutionPolicy RemoteSigned;

- 查看 get-ExecutionPolicy，就显示 RemoteSigned

  ```typescript
  const btn = document.querySelector("#btn");
  const number1Dom = document.querySelector("#number1")! as HTMLInputElement;
  const number2Dom = document.querySelector("#number2")! as HTMLInputElement;

  const sum = (a: number, b: number): number => {
    return a + b;
  };
  const evtHandler = () => {
    const val1 = number1Dom.value;
    const val2 = number2Dom.value;
    console.log(sum(+val1, +val2));
  };

  btn.addEventListener("click",

  ```

上述的 ts 通过 tsc 编译 上文有提到一种编译的方式，我们来对比一下使用 js 有什么问题

先来贴一下编译后的 js

```javascript
var btn = document.querySelector('#btn');
var number1Dom = document.querySelector('#number1');
var number2Dom = document.querySelector('#number2');
var sum = function (a, b) {
  return a + b;
};
var evtHandler = function () {
  var val1 = number1Dom.value;
  var val2 = number2Dom.value;
  console.log(sum(+val1, +val2));
};
btn.addEventListener('click', evtHandler);
```

我们要对类型进行优化，确保相加的是两个数字

```javascript
var sum = function (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return +a + +b;
  }
};
```

## 开始使用

开始 玩无非就是简单的 demo 然后在 vue 中的应用 在 react 中的应用 其次生态 玩一玩生态，大体是要简单的写写 ts 的代码，我现在在看说唱，我们这样，定义一个对象，然后数一数 rapper

```typescript
const rappers = {
    first:"subs"，
    sec:'彤彤',
    thir:"姜云升"
}
```

我们 getter 读取每一个说唱歌手，

```
console.log(rappers['sec'])
```

这时候我们直接打印第四个歌手，可能会出问题，你都学 ts js 的基本类型应该晓得，

## 类型

```js
boolean，bigint，null，number，string，symbol，object，和undefined
```

这里重点说一下，类型

```
Number	双精度IEEE 754浮点数。
String	一个不变的UTF-16字符串。
BigInt	任意精度格式的整数。
Boolean	true和false。
Symbol	通常用作键的唯一值。
Null	等同于单位类型。
Undefined	也等同于单位类型。
Object	类似于记录。
```

## 一个相加的案例

```typescript
const btn = document.querySelector("#btn");
const number1Dom = document.querySelector("#number1")! as HTMLInputElement;
const number2Dom = document.querySelector("#number2")! as HTMLInputElement;

const sum = (a: number, b: number): number => {
  return a + b;
};
const evtHandler = () => {
  const val1 = number1Dom.value;
  const val2 = number2Dom.value;
  console.log(sum(+val1, +val2));
};

btn.addEventListener("click",

```

上述的 ts 通过 tsc 编译 上文有提到一种编译的方式，我们来对比一下使用 js 有什么问题

先来贴一下编译后的 js

```javascript
var btn = document.querySelector('#btn');
var number1Dom = document.querySelector('#number1');
var number2Dom = document.querySelector('#number2');
var sum = function (a, b) {
  return a + b;
};
var evtHandler = function () {
  var val1 = number1Dom.value;
  var val2 = number2Dom.value;
  console.log(sum(+val1, +val2));
};
btn.addEventListener('click', evtHandler);
```

我们要对类型进行优化，确保相加的是两个数字

```javascript
var sum = function (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return +a + +b;
  }
};
```
