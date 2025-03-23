import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Clear cart when the user lands on this page
    localStorage.removeItem('cart')
  }

  goHome(): void {
    this.router.navigate(['/'])
  }
}
