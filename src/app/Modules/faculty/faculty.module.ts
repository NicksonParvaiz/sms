import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { AssignmentSubmissionsComponent } from './assignment-submissions/assignment-submissions.component';
import { AttendanceMarkingComponent } from './attendance-marking/attendance-marking.component';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';


@NgModule({
  declarations: [
    AssignmentSubmissionsComponent,
    AttendanceMarkingComponent,
    AssignmentFormComponent
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule
  ]
})
export class FacultyModule { }
