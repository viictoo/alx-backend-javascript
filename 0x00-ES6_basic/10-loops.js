/* eslint-disable */
//  for of does not give access to idx of elems: disable es6
export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const idx of array.entries()) {
  // for (const [i, idx] of array.entries()) {
    array[i] = appendString + idx;
    i += 1;
  }

  return array;
}
