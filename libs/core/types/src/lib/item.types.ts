export interface IItem {
  id: string
  name: string
  shortDescription: string
  description: string
  img: string
  price: IPrice
}

export interface IPrice {
  amount: number
  unit: 'kg'
}

// EXPORTERAR IItem, men det hittar fortfarande inte IMPORT????
