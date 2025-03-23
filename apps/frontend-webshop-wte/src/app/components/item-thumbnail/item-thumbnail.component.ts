import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { IItem } from '@inglorious/core-types'
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-item-thumbnail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './item-thumbnail.component.html',
  styleUrl: './item-thumbnail.component.scss'
})
export class ItemThumbnailComponent {
  @Input() item: IItem = {
    id: '',
    name: '',
    shortDescription: '',
    description: '',
    img: '',
    price: {
      amount: 0,
      unit: 'kg'
    }
  }

  constructor(private cartService: CartService) {}

  addToCart(): void {
    this.cartService.addToCart(this.item)
    alert(`${this.item.name} added to cart!`)
  }
}
