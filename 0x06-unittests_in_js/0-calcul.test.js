#!/usr/bin/node
const calculateNumber = require("./0-calcul.js");
const assert = require("assert");


describe('calculateNumber', () => {
  it('handles first arg when it is a float', () => {
    assert.equal(calculateNumber(1.0, 0), 1);
    assert.equal(calculateNumber(9.00, 0), 9);
    assert.equal(calculateNumber(555.000, 0), 555);
  });
  it('handles second arg when it is a float', () => {
    assert.equal(calculateNumber(0, 1.0), 1);
    assert.equal(calculateNumber(0, 9.00), 9);
    assert.equal(calculateNumber(0, 555.000), 555);
  });
  it('rounds first arg down to nearest number', () => {
    assert.equal(calculateNumber(1.1, 0), 1);
    assert.equal(calculateNumber(1.2, 0), 1);
    assert.equal(calculateNumber(1.4, 0), 1);
  });
  it('rounds second arg down to nearest number', () => {
    assert.equal(calculateNumber(0, 1.1), 1);
    assert.equal(calculateNumber(0, 1.2), 1);
    assert.equal(calculateNumber(0, 1.4), 1);
  });
  it('rounds first arg to nearest factor', () => {
    assert.equal(calculateNumber(1.6, 0), 2);
    assert.equal(calculateNumber(1.7, 0), 2);
    assert.equal(calculateNumber(1.9, 0), 2);
  });
  it('rounds second arg to nearest factor', () => {
    assert.equal(calculateNumber(1.6, 0), 2);
    assert.equal(calculateNumber(1.9, 0), 2);
    assert.equal(calculateNumber(1.7, 0), 2);
  });
  it('rounds both args', () => {
    assert.equal(calculateNumber(1.4, 1.3), 2);
    assert.equal(calculateNumber(1.1, 1.3), 2);
    assert.equal(calculateNumber(1.9, 1.3), 3);
  });
  it('rounds correctly for longer fractions', () => {
    assert.equal(calculateNumber(1.41112, 1.3), 2);
    assert.equal(calculateNumber(1.11212, 1.3), 2);
    assert.equal(calculateNumber(1.9322212, 1.3), 3);
  });
  it('returns a number', () => {
    assert.equal(calculateNumber(1.41112, 1.3123212), 2);
    assert.equal(calculateNumber(1.11212, 1.31212), 2);
    assert.equal(calculateNumber(1.9322212, 1.31212), 3);
  });
});