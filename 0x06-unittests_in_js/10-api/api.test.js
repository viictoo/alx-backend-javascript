// validate POST & GET json data using deep egalite

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
    url: 'http://localhost:7865/cart/hello',
    method: 'GET',
  };

  it("should respond with a 404 error when id is not an integer", (done) => {
    request(options, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Path /available_payments returns application json data', () => {
  const options = {
    url: 'http://localhost:7865/available_payments',
    method: 'GET',
  };

  it("should respond with json data", (done) => {
    request(options, (error, response, body) => {
      if (error) return done(error);
      expect(body).to.deep.equal(
        '{"payment_methods":{"credit_cards":true,"paypal":false}}'
      );
      done();
    });
  });
});

describe('PATH /login accepts json data', () => {
  const options = {
    url: 'http://localhost:7865/login',
    json: { "userName": "Betty" },
    method: 'POST',
  };

  it("should accept json data and return 200 status code", (done) => {
    request(options, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it("should accept json data and return string from the data", (done) => {
    request(options, (error, response, body) => {
      if (error) return done(error);
      expect(body).to.contain('Welcome Betty');
      done();
    });
  });
});
