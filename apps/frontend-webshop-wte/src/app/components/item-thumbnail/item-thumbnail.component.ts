import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { IItem } from '@inglorious/core-types'

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

  //  shortenDescriptionLength = 50;
  //  showFullDescription = false;
  //
  //  shortenDescription(description: string) {
  //    return shortenString(description, this.shortenDescriptionLength);
  //  }
}
