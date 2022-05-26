import { StudentProgressComponent } from './student-progress/student-progress.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { StudentMainComponent } from './student-main/student-main.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentAssignmentComponent } from './student-assignment/student-assignment.component';
import { StudentAssignmentDetailComponent } from './student-assignment-detail/student-assignment-detail.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { StudentNoticeboardComponent } from './student-noticeboard/student-noticeboard.component';


@NgModule({
  declarations: [
    ProfileComponent,
    StudentMainComponent,
    StudentDashboardComponent,
    StudentAssignmentComponent,
    StudentAssignmentDetailComponent,
    StudentAttendanceComponent,
    StudentNoticeboardComponent,
    StudentProgressComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ],
  exports:[
    StudentMainComponent,
   
  ]
})
export class StudentModule { }
