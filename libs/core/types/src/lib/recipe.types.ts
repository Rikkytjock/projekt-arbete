export interface IRecipe {
  id: string
  name: string
  description: string
  img: string
  cookingTime: ICookingTime
  ingredients: IIngredient[]
  steps: IStep[]
}

export interface ICookingTime {
  hours: number
  minutes: number
}

export interface IIngredient {
  name: string
  quantity: IQuantity
}

export interface IQuantity {
  amount: number
  unit: Unit
}

export enum Unit {
  Grams = 'grams',
  Pieces = 'pieces'
}

export interface IStep {
  stepNumber: number
  name: string
  description: string
}
