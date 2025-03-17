import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'

@Component({
  standalone: true,
  imports: [ RouterModule, FooterComponent, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend-webshop-wte'
}
