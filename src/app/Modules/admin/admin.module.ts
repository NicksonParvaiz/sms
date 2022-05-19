import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FacultyComponent } from './faculty/faculty.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NoticeFormComponent } from './notice-form/notice-form.component';


@NgModule({
  declarations: [
    FacultyComponent,
    AccountsComponent,
    NoticeFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
