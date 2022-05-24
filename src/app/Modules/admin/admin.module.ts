import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FacultyComponent } from './faculty/faculty.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NoticeFormComponent } from './notice-form/notice-form.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccountsPanelComponent } from './accounts-panel/accounts-panel.component';


@NgModule({
  declarations: [
    FacultyComponent,
    AccountsComponent,
    NoticeFormComponent,
    AdminDashboardComponent,
    AdminMainComponent,
    AccountsPanelComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule,

  ],
  exports:[
    AdminMainComponent,
    AdminDashboardComponent,
  ]
})
export class AdminModule { }
