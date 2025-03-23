import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { IItem } from '@inglorious/core-types'
import { loadStripe } from '@stripe/stripe-js'
import { CartService } from '../../services/cart.service'

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

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart()
  }

  async continueToPayment() {
    if (!this.fullName || !this.address || !this.email) {
      alert('Please fill out all fields before proceeding.')
      return
    }

    const stripe = await loadStripe(
      'pk_test_51R5P29E7AHvdMVcO3w8MF47hKf3MEuDavD0DNwrVBugZbPXfr6Hj865Y8WvXLlXxPiIyNgmWPF0ttmUt43Ut2rtL00mAw9PMDq'
    )

    const response = await fetch('http://localhost:4242/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: this.cartItems,
        customer: {
          fullName: this.fullName,
          address: this.address,
          email: this.email
        }
      })
    })

    const session = await response.json()

    if (stripe && session.id) {
      stripe.redirectToCheckout({ sessionId: session.id })
    }
  }
}
