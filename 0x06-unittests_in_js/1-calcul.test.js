#!/usr/bin/node
const calculateNumber = require("./1-calcul.js");
const assert = require("assert");


describe('calculates sum', () => {
  it('handles first arg when it is a float', () => {
    assert.equal(calculateNumber('SUM', 1, 5), 6);
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 1.4444, 4.555), 6);
  });
  it('calculates subtraction', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('calculates division', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.equal(calculateNumber('DIVIDE', 1.4111, 4.5222), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 1.433, 4.5121), 0.2);
  });

  it('returns error when divide by 0', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});