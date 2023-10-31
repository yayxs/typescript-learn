// 上下文类型

window.onerror = () => {};

declare let func: (raw: number) => (input: string) => any;

type Func1 = () => string;

type Func2 = () => 'string';
type Func3 = (input: string) => number;
