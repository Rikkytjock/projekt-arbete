import { Route } from '@angular/router'
import { RandomGeneratorComponent } from './components/random-generator/random-generator.component'
import { AboutPageComponent } from './pages/about-page/about-page.component'
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component'
import { RecipeListPageComponent } from './pages/recipe-list-page/recipe-list-page.component'
import { RecipePageComponent } from './pages/recipe-list-page/recipe-page/recipe-page.component'
import { TutorialPageComponent } from './pages/tutorial-page/tutorial-page.component'

export const appRoutes: Route[] = [
  { path: 'about', component: AboutPageComponent },
  { path: 'tutorial', component: TutorialPageComponent },
  { path: 'recipes', component: RecipeListPageComponent },
  { path: 'recipes/:recipeId', component: RecipePageComponent },
  { path: 'privacy', component: PrivacyPageComponent },
  { path: 'generator', component: RandomGeneratorComponent },
  { path: '', component: RecipeListPageComponent }
]
