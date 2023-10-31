function handler<T>(input: T): void {}
const author = 'string';
const age = 12;
handler(author);
handler(age);

function swap<T, U>([start, end]: [T, U]): [U, T] {
  return [end, start];
}
