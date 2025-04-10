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
  // Hämtar cart från localStorage
  // Om det finns en sparad varukorg, hämta och omvandla den från text till array
  // Om inte, returnera en tom array

  // lägger till item
  addToCart(item: IItem): void {
    const cart = this.getCart()
    cart.push(item) //lägger till item
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart)) // sparar cart
  }
  // tar bort items
  removeFromCart(index: number): void {
    const cart = this.getCart()
    cart.splice(index, 1)
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart)) // sparar
  }
  // töm hela cart
  clearCart(): void {
    localStorage.removeItem(this.CART_KEY)
  }
}
