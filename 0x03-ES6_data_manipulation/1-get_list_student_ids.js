export default (array) => {
  if (!Array.isArray(array)) {
    return [];
  }
  // return Array.prototype.map.call(array, ({ id }) => id);
  return array.map((elems) => elems.id);
};
