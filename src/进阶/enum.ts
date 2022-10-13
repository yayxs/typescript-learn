enum Gender {
  Man,
  Women,
}

let nan: Gender = Gender.Man; // 0

console.log(nan);
// 枚举之手动赋值
enum Sex {
  Man = 0,
  Women = 1,
}
console.log(Sex[0]); // Man

/** 一周7天 */
enum Days {
  one,
  two,
}
/** 手动赋值 */
enum Day {
  one = 1,
  two = 2,
}

/** 常数枚举 */
const enum Env {
  Dev,
  Prod,
}
/** 外部枚举 */
