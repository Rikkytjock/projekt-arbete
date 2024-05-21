import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'
import { shortenString } from '@inglorious/string-formatters'
import { IRecipe } from '../../services/recipe/recipe.data'
import { RecipeService } from '../../services/recipe/recipe.service'

@Component({
  selector: 'app-recipe-list-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [RecipeService],
  templateUrl: './recipe-list-page.component.html',
  styleUrl: './recipe-list-page.component.scss'
})
export class RecipeListPageComponent implements OnInit {
  recipes: IRecipe[] = []

  constructor(private recipeService: RecipeService) {}

  async ngOnInit() {
    this.recipes = await this.recipeService.getAll()
    this.shortenDescriptions()
  }

  shortenDescriptions() {
    this.recipes.forEach((recipe) => (recipe.description = shortenString(recipe.description)))
  }
}
