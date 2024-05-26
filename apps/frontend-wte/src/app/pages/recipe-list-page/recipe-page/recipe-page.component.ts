import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-recipe-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.scss'
})
export class RecipePageComponent {}
