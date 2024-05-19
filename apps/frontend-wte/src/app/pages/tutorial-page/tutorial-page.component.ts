import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-tutorial-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tutorial-page.component.html',
  styleUrl: './tutorial-page.component.scss'
})
export class TutorialPageComponent {}
