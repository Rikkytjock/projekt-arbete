import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { prettyHoursAndMinutes, shortenString } from '@inglorious/string-formatters'
import { ICookingTime } from '../../services/recipe/recipe.data'
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
  showFullDescription = false

  shortenDescription(description: string) {
    return shortenString(description, 25)
  }

  detailedCookingTime(cookingTime: ICookingTime) {
    return prettyHoursAndMinutes(cookingTime.hours, cookingTime.minutes)
  }
}
