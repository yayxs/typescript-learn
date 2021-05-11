function ThrowErr (msg:string):never {
    throw Error(msg)
}

function InfiniteLoop(): never {
    while (true) {}
  }