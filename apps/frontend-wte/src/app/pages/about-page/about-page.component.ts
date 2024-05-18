import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { HeaderComponent } from '../../components/header/header.component'

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {}
