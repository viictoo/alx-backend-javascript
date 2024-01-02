//  for of does not give access to idx of elems: disable es6
export default function appendToEachArrayValue(array, appendString) {
  const temp = array.map((idx) => appendString + idx);

  return temp;
}
