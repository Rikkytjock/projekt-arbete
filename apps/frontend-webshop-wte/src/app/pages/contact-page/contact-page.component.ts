import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  name: string = ''
  email: string = ''
  message: string = ''
  submitted: boolean = false

  submitForm() {
    if (!this.name || !this.email || !this.message) {
      alert('Please fill out all fields.')
      return
    }

    console.log('Contact form submitted:', {
      name: this.name,
      email: this.email,
      message: this.message
    })

    this.submitted = true
    this.name = ''
    this.email = ''
    this.message = ''
  }
}
