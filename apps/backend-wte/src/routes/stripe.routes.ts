import express from 'express'
import Stripe from 'stripe'

const router = express.Router()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string) // ENV

router.post('/create-checkout-session', async (req, res) => {
  const items = req.body.items

  if (!items || !Array.isArray(items)) {
    return res.status(400).json({ message: 'Invalid items in request.' })
  }

  const line_items = items.map((item: any) => ({
    price_data: {
      currency: 'eur',
      product_data: {
        name: item.name
      },
      unit_amount: Math.round(item.price.amount * 100)
    },
    quantity: 1
  }))

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: 'http://localhost:4200/payment-success',
      cancel_url: 'http://localhost:4200/payment-cancelled'
    })

    res.json({ url: session.url })
  } catch (err) {
    console.error('Stripe error:', err)
    res.status(500).json({ error: 'Something went wrong creating session' })
  }
})

export default router
