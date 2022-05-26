import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { NotificationComponent } from './notification/notification.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { EmailSendingComponent } from './email-sending/email-sending.component';
import { DateFilterComponent } from './date-filter/date-filter.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { DonutGraphComponent } from './donut-graph/donut-graph.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { FilterButtonComponent } from './filter-button/filter-button.component';
import { StudentFilterComponent } from './student-filter/student-filter.component';
import { NotificationPanelComponent } from './notification-panel/notification-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackComponent } from './back/back.component';
import { NoticeListComponent } from './notice-list/notice-list.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { StudentProgressDetailComponent } from './student-progress-detail/student-progress-detail.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StudentsComponent,
    NoticeboardComponent,
    NotificationComponent,
    AssignmentsComponent,
    EmailSendingComponent,
    DateFilterComponent,
    LineGraphComponent,
    DonutGraphComponent,
    ButtonComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    DashboardCardComponent,
    FilterButtonComponent,
    StudentFilterComponent,
    NotificationPanelComponent,
    BackComponent,
    NoticeListComponent,
    AttendanceListComponent,
    StudentProgressDetailComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    DashboardComponent,
    StudentsComponent,
    NoticeboardComponent,
    NotificationComponent,
    AssignmentsComponent,
    EmailSendingComponent,
    DateFilterComponent,
    LineGraphComponent,
    DonutGraphComponent,
    ButtonComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    DashboardCardComponent,
    FilterButtonComponent,
    StudentFilterComponent,
    NotificationPanelComponent,
    BackComponent,
    NoticeListComponent,
    AttendanceListComponent,
    StudentProgressDetailComponent

  ]
})
export class SharedModule { }
