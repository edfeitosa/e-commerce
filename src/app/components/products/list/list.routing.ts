import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { AuthGuard } from '../../../guards/auth.guard';

const routesList: Routes = [
  {
    path: 'products/list/:id',
    component: ListComponent,
    canActivate: [AuthGuard]
  }
];

export const routingList = RouterModule.forChild(routesList);