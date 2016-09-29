import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const HOME_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', loadChildren: 'app/home/signup/signup.module#SignupModule' }
];

export const homeRouting = RouterModule.forChild(HOME_ROUTES);
