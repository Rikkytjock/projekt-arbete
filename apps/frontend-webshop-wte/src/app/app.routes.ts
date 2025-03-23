import { Route } from '@angular/router'
import { AboutPageComponent } from './pages/about-page/about-page.component'
import { CancelPageComponent } from './pages/cancel-page/cancel-page.component'
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component'
import { ContactPageComponent } from './pages/contact-page/contact-page.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { AllItemPageComponent } from './pages/item-list-page/all-item-page.component'
import { ItemPageComponent } from './pages/item-list-page/item-page/item-page.component'
import { PaymentPageComponent } from './pages/payment-page/payment-page.component'
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component'
import { ShippingPageComponent } from './pages/shipping-page/shipping-page.component'
import { SuccessPageComponent } from './pages/success-page/success-page.component'

export const appRoutes: Route[] = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'privacy', component: PrivacyPageComponent },
  { path: 'items', component: AllItemPageComponent },
  { path: 'items/:itemId', component: ItemPageComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'payment', component: PaymentPageComponent },
  { path: 'success', component: SuccessPageComponent },
  { path: 'cancel', component: CancelPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'shipping', component: ShippingPageComponent }
]
