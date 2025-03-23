import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-cancel-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cancel-page.component.html',
  styleUrl: './cancel-page.component.scss'
})
export class CancelPageComponent {}
