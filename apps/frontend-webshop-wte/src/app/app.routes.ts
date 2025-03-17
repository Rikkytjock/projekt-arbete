import { Route } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component';
import { AllItemPageComponent } from './pages/item-list-page/all-item-page.component'; // ✅ Corrected path
import { ItemPageComponent } from './pages/item-list-page/item-page/item-page.component'; // ✅ Fixed import

export const appRoutes: Route[] = [
    { path: '', component: HomePageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'privacy', component: PrivacyPageComponent },
    { path: 'items', component: AllItemPageComponent },
    { path: 'items/:itemId', component: ItemPageComponent } // ✅ Fixed path for single item
];
