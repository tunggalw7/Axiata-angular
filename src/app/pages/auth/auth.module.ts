import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthGuard } from 'src/app/guard/auth.guard';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AuthModule { }
