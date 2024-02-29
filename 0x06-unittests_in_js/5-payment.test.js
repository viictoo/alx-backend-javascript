/*
Every test should pass without any warning
You should use only one spy to complete this exercise
You should use a beforeEach and a afterEach hooks to
complete this exercise
*/

const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('function sendPaymentRequestToApcalls api', () => {
  // initialise testkit
  let spy;
  let sandbox;
  beforeEach(() => {
    // create sandbox to stub function calls
    sandbox = sinon.createSandbox();
    spy = sandbox.spy(console, 'log');
    // attempt to use single stub for all tests: not valid
    // sandbox.stub(Utils, 'calculateNumber');
  });

  afterEach(() => {
    // restore spies after every test
    // sandbox allows us to restore all our test tools at once
    sandbox.restore();
  });
  // test suite
  it('should call the api function with 100 and 20', () => {
    sandbox.stub(Utils, 'calculateNumber').returns(120)
    sendPaymentRequestToApi(100, 20);
    // test the output using expect from chai
    expect(spy.calledWith('The total is: 120')).to.be.true;
    expect(Utils.calculateNumber.calledOnce).to.be.true;
  });

  // test suite
  it('should call the api function with 10 and 10', () => {
    sandbox.stub(Utils, 'calculateNumber').returns(20)
    sendPaymentRequestToApi(10, 10);
    // test the output using expect from chai
    expect(spy.calledWith('The total is: 20')).to.be.true;
    expect(Utils.calculateNumber.calledOnce).to.be.true;
  });
});