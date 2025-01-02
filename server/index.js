const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: 'rzp_test_nV1x6vDtdWJ7EP', // Replace with your Razorpay Key ID
  key_secret: 'L7MCFoQZgOcfSzhkQevI5N1d',  // Replace with your Razorpay Key Secret
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create order route
app.post('/create-order', async (req, res) => {
  try {
    const order = await razorpay.orders.create({
      amount: 10000, // Amount in paise (10000 paise = ₹100)
      currency: 'INR',
      receipt: 'hackathon-stake',
      payment_capture: 1,
    });
    res.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
