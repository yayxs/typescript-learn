class Queue<TElementType> {
  private _list: TElementType[];

  constructor(init: TElementType[]) {
    this._list = init;
  }
}
