const express = require('express');

const app = express();
const port = 7865;

// use json middleware to send and receive json data
app.use(express.json())
app.get('/', (_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Welcome to the payment system');
});

// regex validation in route definition
app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  const responseObject = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(responseObject);
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.end(`Welcome ${req.body.userName}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});