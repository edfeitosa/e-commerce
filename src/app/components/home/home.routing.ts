import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routesHome: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
];

export const routingHome = RouterModule.forChild(routesHome);