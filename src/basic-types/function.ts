/**
 * 函数声明
 */
function sumFunc(x: number, y: number): number {
  return x + y
}

/**
 * 函数表达式
 */
const addFunc: (x: number, y: number) => number = (x: number, y: number) => {
  return x + y
}

function fn(): void {}

type Add = (a: number, b: number) => number

const add: Add = (a, b) => a + b

interface Entity {
  add: (a: number, b: number) => number
  del(a: number, b: number): number
}

const entity: Entity = {
  add: (a, b) => a + b,
  del(a, b) {
    return a - b
  },
}
/**
 * @param x 可选参数
 */
function log1(x?: string) {
  console.log(x)
}

/**
 *
 * @param x 限定为string 或者 undefined
 */
function log2(x: string | undefined) {}

/**
 *
 * @param x 默认参数
 */
function log3(x: number | string = 'default') {}

function sum(first: number, ...nums: number[]) {
  console.log(first)
  console.log(nums)
}

sum(1, 2)

/**
 * 函数重载
 */
