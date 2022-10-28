/**
 * 枚举：目前已经在 Stage 0 阶段
 * 对象是单向映射的 只能从键映射到键值
 * 枚举是双向映射的
 */
enum Items {
  Foo,
  Bar,
  Baz,
}

enum Items1 {
  Foo,
  Bar = 12,
  Baz, // 13
}

enum Gender {
  Man,
  Women,
}

let nan: Gender = Gender.Man; // 0

// 枚举之手动赋值
enum Sex {
  Man = 0,
  Women = 1,
}

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

enum RequestType {
  GET,
  POST,
  PUT,
  DELETE,
}

// 常量枚举

const enum Items3 {
  Foo,
  Bar,
  Baz,
}
