import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'
import { IRecipe } from '@inglorious/core-types'
import { RecipeThumbnailComponent } from '../../../components/recipe-thumbnail/recipe-thumbnail.component'
import { RecipeService } from '../../../services/recipe/recipe.service'

@Component({
  selector: 'app-recipe-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RecipeThumbnailComponent],
  providers: [RecipeService],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.scss'
})
export class RecipePageComponent implements OnInit {
  recipe: IRecipe = {
    id: '',
    name: '',
    description: '',
    img: '',
    cookingTime: {
      hours: 0,
      minutes: 0
    },
    ingredients: [],
    steps: []
  }
  // Assignar dessa properties till Irecipe

  // constructor injectar de services som jag behöver för komponenten.
  constructor(
    private recipeService: RecipeService // Fetchar recipe data
  ) {}

  async ngOnInit() {
    this.recipe = await this.recipeService.getById('id')
  }
}
