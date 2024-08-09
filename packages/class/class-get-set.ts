class C {
  _x = 1;
  // get 是关键词
  get x() {
    return this._x;
  }
  set x(val: number) {
    this._x = 2;
  }
}
