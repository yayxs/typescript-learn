type Factory<T> = T | number | string; // 类型别名的本质 T 变量

function FactoryFunc(type) {
  // return [ type,number,string ]
}

// 工具类型的封装

type Stringify<T> = {
  [K in keyof T]: string; // 对象类型的所有属性类型置为 string
};
