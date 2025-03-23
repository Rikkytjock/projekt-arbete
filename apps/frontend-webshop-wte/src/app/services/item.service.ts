import { Injectable } from '@angular/core'
import { IItem } from '@inglorious/core-types'
import { itemData } from './item.data'

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  async getAll(): Promise<IItem[]> {
    return itemData
  }

  async getById(itemId: string): Promise<IItem> {
    const item = itemData.find((item) => item.id === itemId)
    if (!item) throw new Error('No item with that ID')

    return item
  }
}
