import { Routes, RouterModule } from '@angular/router';

import { DetailsComponent } from './details.component';
import { AuthGuard } from '../../../guards/auth.guard';

const routesList: Routes = [
  {
    path: 'products/details/:id',
    component: DetailsComponent,
    canActivate: [AuthGuard]
  }
];

export const routingList = RouterModule.forChild(routesList);