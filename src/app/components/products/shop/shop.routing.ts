import { Routes, RouterModule } from '@angular/router';

import { ShopComponent } from './shop.component';
import { AuthGuard } from '../../../guards/auth.guard';

const routesShop: Routes = [
  {
    path: 'products/shop',
    component: ShopComponent,
    canActivate: [AuthGuard]
  }
];

export const routingShop = RouterModule.forChild(routesShop);