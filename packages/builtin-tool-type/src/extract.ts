type TypeExtract = Extract<1 | 2 | 3, 1 | 2 | 4>; // 1 2

type TypeA = 1 | 2 | 3 | 5;
type TypeB = 0 | 1 | 2 | 4;

// 差集
type AExcludeB = Exclude<TypeA, TypeB>; // typeA的差集

type BExcludeB = Exclude<TypeB, TypeA>;

// 并集
