import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { IRecipe } from '@inglorious/core-types'
import { RecipeService } from '../../../services/recipe/recipe.service'

@Component({
  selector: 'app-recipe-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
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

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}

  async ngOnInit() {
    const recipeId = this.route.snapshot.paramMap.get('recipeId')
    if (recipeId !== null) this.recipe = await this.recipeService.getById(recipeId)
  }
}
