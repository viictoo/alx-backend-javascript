const { expect } = require("chai");
const request = require('request');


describe('Integration Testing', () => {
  const options = {
    url: 'http://localhost:7865',
    method: 'GET',
  };

  it("should respond with text content", (done) => {
    request(options, (error, response, body) => {
      expect(body).to.contain("Welcome to the payment system");
      done();
    });
  });

  it("should respond with status code 200", (done) => {
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});