import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { IRecipe } from '@inglorious/core-types'
import { RecipeThumbnailComponent } from '../../../components/recipe-thumbnail/recipe-thumbnail.component'
import { recipeData } from '../../../services/recipe/recipe.data'
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
  recipe!: IRecipe
  // Ändrade till recipe! vilket gör att recipe endast kommer hålla ett recept och att det kommer bli assignat senare

  // constructor injectar de services som jag behöver för komponenten.
  constructor(
    private recipeService: RecipeService, // Fetchar recipe data
    private route: ActivatedRoute // Fattar inte riktigt vad denna gör ska kolla mer om det.
  ) {}

  // Behöver använda recipeData för att den ska kunna importeras.

  async ngOnInit() {
    const id = this.route.snapshot.params['id']
    this.recipe = await this.recipeService.getById(id)
    this.recipe = recipeData.find((recipe) => recipe.id === id)!
  }
}

// Kanske ska ha ett try-catch block här för att hantera error om ID inte finns?
