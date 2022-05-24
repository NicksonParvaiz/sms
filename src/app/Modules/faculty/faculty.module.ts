import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { AssignmentSubmissionsComponent } from './assignment-submissions/assignment-submissions.component';
import { AttendanceMarkingComponent } from './attendance-marking/attendance-marking.component';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';
import { AcademicInfoEidtFormComponent } from './academic-info-eidt-form/academic-info-eidt-form.component';
import { PersonalInfoEidtFormComponent } from './personal-info-eidt-form/personal-info-eidt-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AssignmentSubmissionsComponent,
    AttendanceMarkingComponent,
    AssignmentFormComponent,
    FacultyDashboardComponent,
    AcademicInfoEidtFormComponent,
    PersonalInfoEidtFormComponent
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class FacultyModule { }
