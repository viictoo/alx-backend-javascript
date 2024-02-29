const { expect } = require("chai");
const request = require('request');


describe('Regex integration testing', () => {
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


describe('Path Validation Regex Integration Testing', () => {
  const options = {
    url: 'http://localhost:7865/cart/12',
    method: 'GET',
  };

  it("should respond with text plus id", (done) => {
    request(options, (error, response, body) => {
      if (error) return done(error);
      expect(body).to.contain("Payment methods for cart 12");
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

describe('Path Validation Regex Fails Testing', () => {
  const options = {
    url: 'http://localhost:7865/cart/hello', // Assuming 'hello' is not an integer
    method: 'GET',
  };

  it("should respond with a 404 error when id is not an integer", (done) => {
    request(options, (error, response, body) => {
      if (error) return done(error); // Handle errors properly
      expect(response.statusCode).to.equal(404); // Check the status code
      done();
    });
  });
});
