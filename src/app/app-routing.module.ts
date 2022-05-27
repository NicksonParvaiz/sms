import { ForgotPasswordComponent } from './Modules/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './Modules/auth/login/login.component';
import { AuthguardGuard } from './authguard.guard';
import { StudentProgressComponent } from './Modules/student/student-progress/student-progress.component';
import { StudentNoticeboardComponent } from './Modules/student/student-noticeboard/student-noticeboard.component';
import { StudentAttendanceComponent } from './Modules/student/student-attendance/student-attendance.component';
import { StudentAssignmentComponent } from './Modules/student/student-assignment/student-assignment.component';
import { StudentDashboardComponent } from './Modules/student/student-dashboard/student-dashboard.component';
import { StudentMainComponent } from './Modules/student/student-main/student-main.component';
import { AssignmentSubmissionsComponent } from './Modules/faculty/assignment-submissions/assignment-submissions.component';
import { FacultyAssignmentComponent } from './Modules/faculty/faculty-assignment/faculty-assignment.component';
import { AssignmentsComponent } from './Modules/shared/assignments/assignments.component';
import { AssignmentFormComponent } from './Modules/faculty/assignment-form/assignment-form.component';
import { AttendanceComponent } from './Modules/faculty/attendance/attendance.component';
import { FacultyDashboardComponent } from './Modules/faculty/faculty-dashboard/faculty-dashboard.component';
import { StudentEditComponent } from './Modules/admin/student-edit/student-edit.component';
import { NoticeboardPanelComponent } from './Modules/admin/noticeboard-panel/noticeboard-panel.component';
import { AccountsPanelComponent } from './Modules/admin/accounts-panel/accounts-panel.component';
import { NoticeFormComponent } from './Modules/admin/notice-form/notice-form.component';
import { NotificationPanelComponent } from './Modules/shared/notification-panel/notification-panel.component';
import { EmailSendingComponent } from './Modules/shared/email-sending/email-sending.component';
import { NoticeboardComponent } from './Modules/shared/noticeboard/noticeboard.component';
import { FacultyComponent } from './Modules/admin/faculty/faculty.component';
import { AdminDashboardComponent } from './Modules/admin/admin-dashboard/admin-dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main-template/main/main.component';
import { StudentsComponent } from './Modules/shared/students/students.component';
import { ProfileComponent } from './Modules/student/profile/profile.component';

const routes: Routes = [

  {
    path: 'admin', canActivate: [AuthguardGuard], canActivateChild: [AuthguardGuard], component: MainComponent, children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'student', component: StudentsComponent },
      { path: 'studentEidt', component: StudentEditComponent },
      { path: 'faculty', component: FacultyComponent },
      {
        path: 'noticeboard', component: NoticeboardPanelComponent, children: [
          { path: '', component: NoticeboardComponent },
          { path: 'add', component: NoticeFormComponent }
        ]
      },
      { path: 'add-notice', component: NoticeFormComponent },
      { path: 'notification', component: NotificationPanelComponent },
      { path: 'send-email', component: EmailSendingComponent },
      { path: 'accounts', component: AccountsPanelComponent },
      { path: 'student-progress', component: StudentProgressComponent },
    ]
  },
  {
    path: 'faculty', canActivate: [AuthguardGuard], canActivateChild: [AuthguardGuard], component: MainComponent, children: [
      { path: 'dashboard', component: FacultyDashboardComponent },
      { path: 'student', component: StudentsComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'noticeboard', component: NoticeboardComponent },
      { path: 'assignments', component: FacultyAssignmentComponent },
      { path: 'add-assignment', component: AssignmentFormComponent },
      { path: 'submission', component: AssignmentSubmissionsComponent },
      { path: 'notification', component: NotificationPanelComponent },

    ]
  },

  {
    path: 'student',canActivate: [AuthguardGuard], canActivateChild: [AuthguardGuard], component: MainComponent, children: [
      { path: 'dashboard', component: StudentDashboardComponent },
      { path: 'progress', component: StudentProgressComponent },
      { path: 'attendance', component: StudentAttendanceComponent },
      { path: 'noticeboard', component: StudentNoticeboardComponent },
      { path: 'assignments', component: StudentAssignmentComponent },
      { path: 'Profile', component: ProfileComponent },
      { path: 'notification', component: NotificationPanelComponent },

    ]
  },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
