import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-privacy-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './privacy-page.component.html',
  styleUrl: './privacy-page.component.scss'
})
export class PrivacyPageComponent {}
