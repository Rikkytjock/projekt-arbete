import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { IRecipe } from '@inglorious/core-types'
import { RecipeService } from '../../services/recipe/recipe.service'

@Component({
  selector: 'app-generator-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './random-generator.component.html',
  styleUrl: './random-generator.component.scss'
})
export class RandomGeneratorComponent {
  randomRecipe: IRecipe | null = null

  constructor(private recipeService: RecipeService) {}

  async getRandomRecipe(): Promise<void> {
    this.randomRecipe = await this.recipeService.getRandomRecipe()
  }
}
