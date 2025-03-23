import { CommonModule, Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { IItem } from '@inglorious/core-types'
import { CartService } from '../../../services/cart.service'
import { ItemService } from '../../../services/item.service'

@Component({
  selector: 'app-item-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [ItemService],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.scss'
})
export class ItemPageComponent implements OnInit {
  item: IItem = {
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

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private location: Location,
    private cartService: CartService
  ) {}

  async ngOnInit() {
    const itemId = this.route.snapshot.paramMap.get('itemId')
    if (itemId !== null) this.item = await this.itemService.getById(itemId)
  }

  goBack(): void {
    this.location.back()
  }

  addToCart(): void {
    this.cartService.addToCart(this.item)
    alert(`${this.item.name} added to cart`)
  }
}
