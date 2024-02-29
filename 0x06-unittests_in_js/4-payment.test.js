/* 
Using stubs allows you to greatly speed up your test.
When executing thousands of tests, saving a few seconds is important
Using stubs allows you to control specific edge case (e.g a function
throwing an error or returning a specific result like a number or a timestamp)
*/

const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('function sendPaymentRequestToApcalls api', () => {
  const spy = sinon.spy(console, 'log');
  it('should call the api function with passed args', () => {
    const stubCalculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10)
    // this should now return 10 always
    sendPaymentRequestToApi(100.1, 20);
    // test the output using expect from chai
    expect(stubCalculateNumber.alwaysReturned(10)).to.be.true;
    expect(stubCalculateNumber.calledOnce).to.be.true;
    // spy on the output
    expect(spy.calledWith('The total is: 10')).to.be.true;
    // always restore a spy after using it in a test,
    // it will prevent you from having weird behaviors
    stubCalculateNumber.restore()
    spy.restore()
  });
});