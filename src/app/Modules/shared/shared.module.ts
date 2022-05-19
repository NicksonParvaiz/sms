import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { NotificationComponent } from './notification/notification.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { StudentProgressComponent } from './student-progress/student-progress.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { EmailSendingComponent } from './email-sending/email-sending.component';
import { DateFilterComponent } from './date-filter/date-filter.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { DonutGraphComponent } from './donut-graph/donut-graph.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StudentsComponent,
    NoticeboardComponent,
    NotificationComponent,
    AssignmentsComponent,
    StudentProgressComponent,
    AttendanceComponent,
    EmailSendingComponent,
    DateFilterComponent,
    LineGraphComponent,
    DonutGraphComponent,
    CardComponent,
    ButtonComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule
  ],
  exports:[
    DashboardComponent,
    StudentsComponent,
    NoticeboardComponent,
    NotificationComponent,
    AssignmentsComponent,
    StudentProgressComponent,
    AttendanceComponent,
    EmailSendingComponent,
    DateFilterComponent,
    LineGraphComponent,
    DonutGraphComponent,
    CardComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
