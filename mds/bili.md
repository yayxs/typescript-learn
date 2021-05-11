


趁着这个空隙咱们再 简单的写一个 ts 案例

```typescript
// 美女
class Beauty {
  fullName: string;
  constructor(public firstName: string, public lastName: string) {
    this.fullName = `${firstName}${lastName}`;
  }
}
interface Person {
  firstName: string;
  lastName: string;
}
function genGirl(person: Person): string {
  return `hi ${person.firstName}${person.lastName}`;
}
const beautyGirl: Beauty = new Beauty("赵", "铁柱子");
document.body.textContent = genGirl(beautyGirl);
```

编译之后的 js

```javascript
// 美女
var Beauty = /** @class */ (function() {
  function Beauty(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = "" + firstName + lastName;
  }
  return Beauty;
})();
function genGirl(person) {
  return "hi " + person.firstName + person.lastName;
}
var beautyGirl = new Beauty("赵", "铁柱子");
document.body.textContent = genGirl(beautyGirl);
```

### files 属性

```json
{
  "compilerOptions": {
    "module": "commonjs", // 模块
    "noImplicitAny": true, // 在表达式和声明上有隐含的 any类型时报错
    "removeComments": true, // 删除编译后的注释
    "preserveConstEnums": true,
    "sourceMap": true // 生成map文件
  },
  "files": ["./file-one.ts", "./file-two.ts"]
}
```

### `"include"`和`"exclude"`属性

```json
{
  "compilerOptions": {
    "module": "system",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "outFile": "../../built/local/tsc.js",
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### 总结

其中`compilerOptions` 是编译选项 该`"compilerOptions"`属性可以省略，在这种情况下，使用编译器的默认值

不得不提的是在我们的一些 ts 项目中的`package.json` 文件中非常常见如下的配置

```json
{
 "include": [ *// 需要包含的文件*
  "./xxx"
 ],
 "exclude": [ *// 需要排除的文件*
  "./xxx/**/*.spec.ts", *// 测试文件*
 ]

}
```

## 声明空间

- 类型声明空间

```ts
class Simple {}

let s: Simple; // 其中Simple 是s 的一个`类型注解`
```

- 变量声明空间

## 模块

假使我们在同一个项目中创建两个文件

- index.ts
- demo.ts

我们在不同的文件定义相同的变量

```
let foo: any
无法重新声明块范围变量“foo”。ts(2451)
index.ts(1, 7): 此处也声明了 "foo"。
```

也就是说这些是全局的模块，会造成影响

### ES 模块

这里你就需要回忆一下`ES` 的模块化语法

### global.d.ts

这是我们项目中的全局模块

```ts
// global.d.ts
declare module "foo" {
  // some variable declarations
  export var bar: number;
}
```

作用就是将`接口` 或者`类型` 放入全局命名空间

## 类型注解

说白了，就是对变量的类型进行注解，就像这样

```ts
let arr: boolean[]; // 数组里只能放布尔值
```

其他的就不多说了，可以看第一篇文章

## 泛型

这就需要重点说一下，毕竟在`js` 中很少提到,习惯上用 `T` 来表示

```ts
function foo<T>(params: T[]): T[] {}
// 还记得  let arr:boolean[] ，也就是说 函数的参数 params 是有 `T` 类型组成的数组，返回值亦然
```

## 联合类型

```ts
function bar(params: boolean | string) {}
```

## 类型别名

不管怎么说，见到`type` 得知道是类型别名，至于什么时候用 接口什么时候用类型别名，你用着用着就知道了

```ts
type Callback = (data: string) => void;
```
