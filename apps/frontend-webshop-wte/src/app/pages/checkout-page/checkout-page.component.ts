import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { IItem } from '@inglorious/core-types'
import { CartService } from '../../services/cart.service'
import { StripeService } from '../../services/stripe.service' // stripe importen

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss'
})
export class CheckoutPageComponent implements OnInit {
  cartItems: IItem[] = []
  totalPrice = '0.00'

  constructor(private cartService: CartService, private router: Router, private stripeService: StripeService) {} //lade till stripe service i constructor

  ngOnInit(): void {
    this.loadCart()
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCart()
    this.calculateTotal()
  }

  calculateTotal(): void {
    const total = this.cartItems.reduce((sum, item) => sum + item.price.amount, 0)
    this.totalPrice = total.toFixed(2)
  }

  removeItem(index: number): void {
    this.cartService.removeFromCart(index)
    this.loadCart()
  }

  completeCheckout(): void {
    if (this.cartItems.length === 0) return

    // routar till payment page istället
    this.router.navigate(['/payment'])
  }
}
