import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { PageGuard } from '../../guard/page.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [PageGuard],
    component: DashboardComponent,
    children: [ 
      {
        path: 'all-tickets',
        canActivate: [PageGuard],
        component: AllTicketsComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
