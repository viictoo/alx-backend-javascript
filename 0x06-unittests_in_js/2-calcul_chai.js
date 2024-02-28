#!/usr/bin/node

module.exports = (type, a, b) => {
  a  = Math.round(a)
  b  = Math.round(b)
  const operations = {
    'SUM': (a, b) => a + b,
    'SUBTRACT': (a, b) => a - b,
    'DIVIDE': (a, b) => b === 0 ? "Error" : a / b ,
};
  return operations[type](a, b)
}