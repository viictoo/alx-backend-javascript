JS  CLASSES &  METAPROGRAMMING

sYMBOLS

.toPrimitive
// An object with Symbol.toPrimitive property.
const obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 10;
    }
    if (hint === "string") {
      return "hello";
    }
    return true;
  },
};


.species // create a new version of a class
  static get [Symbol.species]() {
    return this;
  }