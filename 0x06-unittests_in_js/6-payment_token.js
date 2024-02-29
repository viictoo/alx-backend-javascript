/* Async tests with done
Look into how to support async testing,
for example when waiting for the answer of an API or from a Promise
Create a new function named getPaymentTokenFromAPI
The function will take an argument called success (boolean)
When success is true, it should return a resolved promise with the object {data: 'Successful response from the API' }
Otherwise, the function is doing nothing.
*/
// function getPaymentTokenFromAPI(success) {
//   if (success) {
//     return Promise.resolve({data: 'Successful response from the API'})
//   }
// }

module.exports = (success) => success ? Promise.resolve({ data: 'Successful response from the API' }) : undefined