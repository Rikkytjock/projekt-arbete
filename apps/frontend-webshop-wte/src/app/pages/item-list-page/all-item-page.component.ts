import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IItem } from '@inglorious/core-types';
import { ItemThumbnailComponent } from '../../components/item-thumbnail/item-thumbnail.component';
import { ItemService } from '../../item/item.service';

@Component({
  selector: 'app-all-item-page',
  standalone: true,
  imports: [CommonModule, ItemThumbnailComponent],
  providers: [ItemService],
  templateUrl: './all-item-page.component.html',
  styleUrl: './all-item-page.component.scss'
})
export class AllItemPageComponent implements OnInit {
  items: IItem[] = [];

  constructor(private itemService: ItemService) {}

  async ngOnInit() {
    this.items = await this.itemService.getAll();
  }
}
