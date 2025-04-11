import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common'
import { Response } from 'express'
import { CheckoutService } from './checkout.service'

@Controller('stripe')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post('create-checkout-session')
  async createCheckout(@Body('items') items: any[], @Res() res: Response) {
    try {
      const session = await this.checkoutService.createStripeSession(items)
      return res.status(200).json({ url: session.url })
    } catch (err) {
      console.error('Stripe error:', err)
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: 'Something went wrong creating session'
      })
    }
  }
}
