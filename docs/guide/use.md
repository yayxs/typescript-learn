
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
var btn = document.querySelector("#btn");
var number1Dom = document.querySelector("#number1");
var number2Dom = document.querySelector("#number2");
var sum = function(a, b) {
  return a + b;
};
var evtHandler = function() {
  var val1 = number1Dom.value;
  var val2 = number2Dom.value;
  console.log(sum(+val1, +val2));
};
btn.addEventListener("click", evtHandler);
```

我们要对类型进行优化，确保相加的是两个数字

```javascript
var sum = function(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return +a + +b;
  }
};
```

