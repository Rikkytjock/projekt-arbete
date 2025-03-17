import { Injectable } from '@angular/core'
import { IRecipe } from '@inglorious/core-types'
import { recipeData } from './recipe.data'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  async getAll() {
    return recipeData
  }

  async getById(recipeId: string) {
    const recipe = recipeData.find((recipe) => recipe.id === recipeId)
    if (!recipe) throw new Error('No recipe with that ID')

    return recipe
  }

  async getRandomRecipe(): Promise<IRecipe> {
    const randomIndex = Math.floor(Math.random() * recipeData.length)
    return recipeData[randomIndex]
  }
}

// yarn nx serve frontend-webshop-wte
