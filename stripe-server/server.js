const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('API KEY HERE!!!!!!!!!!!!!!'); 

const app = express();
app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const items = req.body.items;

  const line_items = items.map((item) => ({
    price_data: {
      currency: 'eur',
      product_data: {
        name: item.name,
      },
      unit_amount: Math.round(item.price.amount * 100), 
    },
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    success_url: 'http://localhost:4200/success',
    cancel_url: 'http://localhost:4200/cancel',
  });

  res.json({ id: session.id });
});

app.listen(4242, () => console.log('Server running on port 4242'));
