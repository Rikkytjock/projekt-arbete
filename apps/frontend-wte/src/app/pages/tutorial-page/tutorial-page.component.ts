import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-tutorial-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tutorial-page.component.html',
  styleUrl: './tutorial-page.component.scss'
})
export class TutorialPageComponent {}
