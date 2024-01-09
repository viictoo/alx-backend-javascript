import cleanSet from './8-clean_set';
// expected input : jovi-aparte-appetit
console.log(
  cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'),
);

// non existent startstring: ''
console.log(
  cleanSet(new Array(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'ask'),
);
// single ladies : ana
console.log(
  cleanSet(new Set(['bonana']), 'bon'),
);
// empty startstring : ''
console.log(
  cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''),
);
// empty set: ''
console.log(
  cleanSet(new Set(), 'bon'),
);
// non string input : jovi-aparte-appetit
console.log(
  cleanSet(new Set([123, 'bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'),
);
