interface Person {
  readonly id: number
  name: string
  age?: number
  [propName: string]: any
}

const tom: Person = {
  id: 123,
  name: 'tom',
  age: 12,
  gender: 'male',
}
