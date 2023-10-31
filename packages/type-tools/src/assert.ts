// import second from 'assert'

function fooFunc(val: any, msg?: string): asserts val {
  if (!val) {
    throw new Error(msg);
  }
}
