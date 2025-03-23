import { Injectable } from '@angular/core'
import { IItem } from '@inglorious/core-types'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly CART_KEY = 'cart'

  getCart(): IItem[] {
    return JSON.parse(localStorage.getItem(this.CART_KEY) || '[]')
  }

  addToCart(item: IItem): void {
    const cart = this.getCart()
    cart.push(item)
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart))
  }

  removeFromCart(index: number): void {
    const cart = this.getCart()
    cart.splice(index, 1)
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart))
  }

  clearCart(): void {
    localStorage.removeItem(this.CART_KEY)
  }
}
