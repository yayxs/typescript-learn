/**
 * 类型断言
 */

const arrNum: number[] = [1, 2, 3, 4]
console.log(arrNum.find((num) => num > 2))
// const found:number = arrNum.find(num=>num>12) as number //以使用 as 语法做类型断言

const res: number = <number>arrNum.find((num) => num > 2)
