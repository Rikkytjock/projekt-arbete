import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { IRecipe } from '@inglorious/core-types'
import { recipeData } from '../../services/recipe/recipe.data'

@Component({
  selector: 'app-generator-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './generator-page.component.html',
  styleUrl: './generator-page.component.scss'
})
export class GeneratorPageComponent {
  randomRecipe: IRecipe | null = null

  // Vi assignar randomRecipe Irecipe, vilket gör att randomRecipe kan hålla all data som finns i Irecipe (i detta fallet alla recept)
  // Vi använder pipe | (union operator) vilket betyder att random receipe kan hålla antingen Null eller Irecipe
  // Vi använder = null för att vi vill att det initiella värdet ska vara null. Alltså att där inte ska finnas något recept när vi öppnar sidan.
  // Efter man trycker på generate recipe så kommer Random recipe ändras från null till ett Irecipe.
  // ** Är union operator den bästa att använda i detta fallet? Som jag förstår kan union operator vara antingen eller. Men inget starkt eller. Dvs. Det man assignar kan få båda värde?**

  getRandomRecipe(): void {
    const randomIndex = Math.floor(Math.random() * recipeData.length)
    this.randomRecipe = recipeData[randomIndex]
  }
}

// getRadnomRecipe är namnet på metod
// skillnaden på funktion och metod
// =
// void innebär att den inte retunerar något värde?
// declarerar randomIndex, assignar math.floor
// Math.floor är en JS metod för att avrunda siffror nedåt
// Math.random generar ett random nummer mellan 0 och 1
// vi använder recipeData.lenght för att ta fram alla recept (blir som att man hämtar data från en array)
// Vi gångrar math.random med recipe.data för att få fram ett random recept

// this. tillåter oss ta del
// randomRecipie referar till den randonRecipie vi skapade tidigare
// recipeData är den data där vi har alla recept
// randomIndex som den heter i detta fallet läggs alltid i [] när man gör
