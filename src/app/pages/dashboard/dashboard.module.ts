import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from '../../ui/header/header.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';

import { MyFilterPipe } from  '../../helper/table-filter.pipe';
import { PageGuard } from 'src/app/guard/page.guard';

@NgModule({
  declarations: [
    MyFilterPipe,
    HeaderComponent,
    DashboardComponent,
    AllTicketsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
  ],
  providers : [
    MyFilterPipe,
    PageGuard
  ]
})
export class DashboardModule { }
