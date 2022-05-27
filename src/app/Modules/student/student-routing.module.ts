import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { StudentAssignmentComponent } from './student-assignment/student-assignment.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentNoticeboardComponent } from './student-noticeboard/student-noticeboard.component';
import { StudentProgressComponent } from './student-progress/student-progress.component';

const routes: Routes = [
  { path: '', component: StudentDashboardComponent },
  { path: 'dashboard', component: StudentDashboardComponent },
  { path: 'progress', component: StudentProgressComponent },
  { path: 'attendance', component: StudentAttendanceComponent },
  { path: 'noticeboard', component: StudentNoticeboardComponent },
  { path: 'assignments', component: StudentAssignmentComponent },
  { path: 'Profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
