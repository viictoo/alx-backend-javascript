export default function cleanSet(set, startString) {
  const str = [];
  const separator = '-';
  const arr = Array.from(set);
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';
  for (let i = 0; i < arr.length; i += 1) {
    const elem = arr[i];
    if (elem.startsWith(startString) && typeof elem === 'string' && elem.length > 0) {
      str.push(elem.slice(startString.length));
    }
  }
  return str.join(separator);
}
