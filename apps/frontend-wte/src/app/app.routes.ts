import { Route } from '@angular/router'
import { AboutPageComponent } from './pages/about-page/about-page.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { TutorialPageComponent } from './pages/tutorial-page/tutorial-page.component'

export const appRoutes: Route[] = [
  { path: 'about', component: AboutPageComponent },
  { path: 'tutorial', component: TutorialPageComponent },
  { path: '', component: HomePageComponent }
]
