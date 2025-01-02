import React, { useState } from 'react';

const PaymentUPI = () => {
  const [paymentStatus, setPaymentStatus] = useState('');

  // Function to initialize the Razorpay payment
  const initiatePayment = async () => {
    try {
      // Call your server to create an order (see Step 4 below)
      const orderData = await fetch('http://localhost:5000/create-order', {
        method: 'POST',
      }).then((response) => response.json());

      const options = {
        key: 'rzp_test_nV1x6vDtdWJ7EP',  // Replace with your Razorpay Key ID
        amount: orderData.amount, // Amount in smallest currency unit (e.g., cents)
        currency: orderData.currency,
        name: 'Hackathon Stake Payment',
        description: 'Paying the stake for Hackathon',
        order_id: orderData.id,
        handler: function (response) {
          // Handle successful payment here
          setPaymentStatus('Payment Successful!');
        },
        prefill: {
          name: 'User Name', // Optionally prefill user name
          email: 'user@example.com', // Optionally prefill user email
          contact: '1234567890', // Optionally prefill user contact
        },
      };

      // Initialize Razorpay
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Error initiating payment:', error);
      setPaymentStatus('Error during payment initiation');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Pay Stake for Hackathon (UPI Payment)</h1>
      <button onClick={initiatePayment} style={{ padding: '10px 20px' }}>
        Pay via UPI
      </button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default PaymentUPI;
