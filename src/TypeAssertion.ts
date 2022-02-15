/**
 * 类型断言
 */

const arrNum: number[] = [1, 2, 3, 4]
// console.log(arrNum.find((num) => num > 2))
// const found:number = arrNum.find(num=>num>12) as number //以使用 as 语法做类型断言

// const res: number = <number>arrNum.find((num) => num > 2)

interface Cat {
  name: string
  run(): void
}

interface Fish {
  name: string
  swim(): void
}

function getName(animal: Cat | Fish) {
  return animal.name
}

// function isFish(animal: Cat | Fish) {
//     if(typeof animal.swim === 'function'){
//         return true
//     }
//     return false
// }

function isFish(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === 'function') {
    return true
  }
  return false
}

class ApiError extends Error {
  code: number = 0
}

class HttpError extends Error {
  statusCode: number = 200
}

;(window as any).foo = 1
