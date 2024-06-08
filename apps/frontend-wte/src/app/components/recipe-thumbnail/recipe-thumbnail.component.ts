import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { ICookingTime, IRecipe } from '@inglorious/core-types'
import { prettyHoursAndMinutes, shortenString } from '@inglorious/string-formatters'
import { RecipeService } from '../../services/recipe/recipe.service'

@Component({
  selector: 'app-recipe-thumbnail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [RecipeService],
  templateUrl: './recipe-thumbnail.component.html',
  styleUrl: './recipe-thumbnail.component.scss'
})
export class RecipeThumbnailComponent {
  @Input() recipe: IRecipe = {
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

  shortenDescriptionLength = 25
  showFullDescription = false

  shortenDescription(description: string) {
    return shortenString(description, this.shortenDescriptionLength)
  }

  detailedCookingTime(cookingTime: ICookingTime) {
    return prettyHoursAndMinutes(cookingTime.hours, cookingTime.minutes)
  }
}
