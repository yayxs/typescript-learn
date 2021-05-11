enum Gender {
    Man,
    Women
}

let nan:Gender = Gender.Man // 0

console.log(nan)
// 枚举之手动赋值
enum Sex {
    Man = 0,
    Women = 1
}
console.log(Sex[0]) // Man

