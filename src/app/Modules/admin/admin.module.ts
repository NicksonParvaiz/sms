import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NoticeboardPanelComponent } from './noticeboard-panel/noticeboard-panel.component';
import { StudentEditComponent } from './student-edit/student-edit.component';


@NgModule({
  declarations: [
    FacultyComponent,
    AccountsComponent,
    NoticeFormComponent,
    AdminDashboardComponent,
    AdminMainComponent,
    AccountsPanelComponent,
    NoticeboardPanelComponent,
    StudentEditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[
    AdminMainComponent,
    AdminDashboardComponent,
  ]
})
export class AdminModule { }
