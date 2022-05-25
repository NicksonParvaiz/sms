 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { AssignmentSubmissionsComponent } from './assignment-submissions/assignment-submissions.component';
import { AttendanceMarkingComponent } from './attendance-marking/attendance-marking.component';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';
import { PersonalInfoEidtFormComponent } from './personal-info-eidt-form/personal-info-eidt-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FacultyMainComponent } from './faculty-main/faculty-main.component';
import { SharedModule } from '../shared/shared.module';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceDetailsComponent } from './attendance-details/attendance-details.component';
import { FacultyAssignmentComponent } from './faculty-assignment/faculty-assignment.component';
import { FacultyAssignmentDetailComponent } from './faculty-assignment-detail/faculty-assignment-detail.component';


@NgModule({
  declarations: [
    AssignmentSubmissionsComponent,
    AttendanceMarkingComponent,
    AssignmentFormComponent,
    FacultyDashboardComponent,
    PersonalInfoEidtFormComponent,
    FacultyMainComponent,
    AttendanceComponent,
    AttendanceDetailsComponent,
    FacultyAssignmentComponent,
    FacultyAssignmentDetailComponent
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports:[
    AssignmentSubmissionsComponent,
    AttendanceMarkingComponent,
    AssignmentFormComponent,
    FacultyDashboardComponent,
    PersonalInfoEidtFormComponent,
    FacultyMainComponent,
    AttendanceComponent
  ]
})
export class FacultyModule { }
