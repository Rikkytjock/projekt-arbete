import { Injectable } from '@nestjs/common'
import Stripe from 'stripe'

// laddar stripe från env
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

@Injectable()
export class CheckoutService {
  async createStripeSession(items: any[]) {
    if (!items || !Array.isArray(items)) {
      throw new Error('Invalid items in request')
    }

    const line_items = items.map((item: any) => ({
      price_data: {
        currency: 'eur',
        product_data: { name: item.name },
        unit_amount: Math.round(item.price.amount * 100)
      },
      quantity: 1
    }))

    return await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: 'http://localhost:4200/payment-success',
      cancel_url: 'http://localhost:4200/payment-cancelled'
    })
  }
}
