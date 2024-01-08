export default (array, city) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.filter((obj) => obj.location === city);
};
