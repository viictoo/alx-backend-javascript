export default class HolbertonClass {
  constructor(size, location) {
    this._location = location;
    this._size = size;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
