import { Component } from '@angular/core'
import { IRecipe } from '@inglorious/core-types'
import { RecipeService } from '../../services/recipe/recipe.service'

@Component({
  selector: 'app-random-generator',
  templateUrl: './random-generator.component.html',
  styleUrls: ['./random-generator.component.scss']
})
export class RandomGeneratorComponent {
  randomRecipe: IRecipe | null = null

  constructor(private recipeService: RecipeService) {}

  async getRandomRecipe(): Promise<void> {
    this.randomRecipe = await this.recipeService.getRandomRecipe()
  }
}
