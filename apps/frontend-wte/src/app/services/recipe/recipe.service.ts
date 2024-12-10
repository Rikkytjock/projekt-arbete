import { Injectable } from '@angular/core'
import { recipeData } from './recipe.data'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  async getAll() {
    return recipeData
  }

  async getById(recipeId: string) {
    console.log(recipeId)
    const recipe = recipeData.find((recipe) => recipe.id === recipeId)
    if (!recipe) throw new Error('No recipe with that ID')

    return recipe
  }
}
