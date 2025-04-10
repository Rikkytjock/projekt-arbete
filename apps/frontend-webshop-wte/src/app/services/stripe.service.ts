import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  constructor(private http: HttpClient) {}

  createCheckoutSession(cartItems: any[]) {
    return this.http.post<{ url: string }>('http://localhost:3000/api/create-checkout-session', { items: cartItems })
  }
}
