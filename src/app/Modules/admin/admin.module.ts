import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FacultyComponent } from './faculty/faculty.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NoticeFormComponent } from './notice-form/notice-form.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminMainComponent } from './admin-main/admin-main.component';


@NgModule({
  declarations: [
    FacultyComponent,
    AccountsComponent,
    NoticeFormComponent,
    AdminDashboardComponent,
    AdminMainComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports:[
    AdminMainComponent,
    AdminDashboardComponent,
  ]
})
export class AdminModule { }
