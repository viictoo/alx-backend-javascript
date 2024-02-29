// Spies are really useful and allow you to focus only on what your
// code is doing and not the downstream APIs or functions
// Remember that integration test is different from unit test.
// Your unit test should test your code, not the code of a different
// function
const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('function sendPaymentRequestToApcalls api', () => {
  const spy = sinon.spy(Utils, 'calculateNumber');
  it('should call the api function with passed args', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    // always restore a spy after using it in a test,
    // it will prevent you from having weird behaviors
    spy.restore()
  });
});