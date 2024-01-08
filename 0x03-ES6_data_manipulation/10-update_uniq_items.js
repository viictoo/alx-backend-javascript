export default (myMap) => {
  if (!(myMap instanceof Map)) {
    throw Error('Cannot process');
  }
  myMap.forEach((value, key) => {
    if (value === 1) myMap.set(key, 100);
  });
  return myMap;
};
