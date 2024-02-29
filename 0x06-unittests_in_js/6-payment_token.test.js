const { expect } = require('chai');

const getPaymentTokenFromApi = require('./6-payment_token');

describe('async test for function getPaymentTokenFromApi', () => {
  it('should return an object when passed true', (done) => {
    getPaymentTokenFromApi(true).then((res) => {
      expect(res).to.include({ data: 'Successful response from the API' });
      done();
    }).catch((err) => done(err));
  });
});