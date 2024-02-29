const express = require('express');

const app = express();
const port = 7865;

app.get('/', (_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Welcome to the payment system');
});

// regex validation in route definition
app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});