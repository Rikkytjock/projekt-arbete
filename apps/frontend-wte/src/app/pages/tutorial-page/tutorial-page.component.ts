import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FooterComponent } from '../../components/footer.component'
import { HeaderComponent } from '../../components/header/header.component'

@Component({
  selector: 'app-tutorial-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './tutorial-page.component.html',
  styleUrl: './tutorial-page.component.scss'
})
export class TutorialPageComponent {}
