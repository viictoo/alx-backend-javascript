export default function createInt8TypedArray(length, position, value) {
  const dv = new ArrayBuffer(length);
  const int8Array = new Int8Array(dv);
  int8Array[position] = value;
  if (position > int8Array.length) throw new Error('Position outside range');
  return new DataView(dv);
}
