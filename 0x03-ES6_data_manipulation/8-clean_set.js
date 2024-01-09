export default function cleanSet(set, startString) {
  let str = '';
  let separator = '';
  const arr = Array.from(set);
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';
  for (let i = 0; i < arr.length; i += 1) {
    const elem = arr[i];
    if (elem.startsWith(startString) && elem && elem.length > 0) {
      if (i !== arr.length - 1) separator = '-';
      str += elem.slice(startString.length) + separator;
    }
  }
  return str.endsWith('-') ? str.slice(0, -1) : str;
}
