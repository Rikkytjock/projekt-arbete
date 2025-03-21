import { CommonModule, Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { IItem } from '@inglorious/core-types'
import { ItemService } from '../../../item/item.service'

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
    shortDescription: '', // ✅ Add this line
    description: '',
    img: '',
    price: {
      amount: 0,
      unit: 'kg'
    }
  }

  constructor(private itemService: ItemService, private route: ActivatedRoute, private location: Location) {}

  async ngOnInit() {
    const itemId = this.route.snapshot.paramMap.get('itemId')
    if (itemId !== null) this.item = await this.itemService.getById(itemId)
  }

  goBack(): void {
    this.location.back()
  }
}
