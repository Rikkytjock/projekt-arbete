import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { IItem } from '@inglorious/core-types'
import { CartService } from '../../services/cart.service'
import { StripeService } from '../../services/stripe.service'

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.scss'
})
export class PaymentPageComponent implements OnInit {
  fullName: string = ''
  address: string = ''
  email: string = ''
  cartItems: IItem[] = []

  constructor(
    private cartService: CartService,
    private router: Router,
    private stripeService: StripeService // ✅ Inject StripeService
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart()
  }

  continueToPayment(): void {
    if (!this.fullName || !this.address || !this.email) {
      alert('Please fill out all fields before proceeding.')
      return
    }

    // Kallar på backend och skapar stripe session
    this.stripeService.createCheckoutSession(this.cartItems).subscribe({
      next: (res) => {
        window.location.href = res.url
      },
      error: (err) => {
        console.error('Stripe error:', err)
        alert('Something went wrong during payment.')
      }
    })
  }
}
