export default (array) => {
  if (!Array.isArray(array)) {
    return -1;
  }
  const totalSum = array.reduce(
    (accumulator, obj) => accumulator + obj.id, 0,
  );
  return totalSum;
};
