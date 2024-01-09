export default function cleanSet(set, startString) {
  const str = [];
  const separator = '-';
  const arr = Array.from(set);
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';
  for (let i = 0; i < arr.length; i += 1) {
    const elem = arr[i];
    // order of conditions matters: check startswith last
    if (typeof elem === 'string' && elem.length > 0 && elem.startsWith(startString)) {
      str.push(elem.slice(startString.length));
    }
  }
  return str.join(separator);
}

// bare minimum valid answer
// export default function cleanSet(set, startString) {
//   if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';
//   return [...set]
//     .filter((el) => el.startsWith(startString))
//     .map((el) => el.slice(startString.length))
//     .join('-');
// }
