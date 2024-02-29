// Stubs are similar to spies. Except that you can provide a
// different implementation of the function you are wrapping

const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${result}`);
}
  
module.exports = sendPaymentRequestToApi;