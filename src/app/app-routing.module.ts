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

const routes: Routes = [

  {
    path: 'admin', component: MainComponent, children: [
      { path: '', component: AdminDashboardComponent },
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
    ]
  },
  {
    path: '', component: MainComponent, children: [
      { path: 'add-assignment', component : AssignmentFormComponent },
      { path: '', component : AssignmentSubmissionsComponent },
      { path: 'assignments', component : FacultyAssignmentComponent },
      { path: 'attendance', component : AttendanceComponent },
      { path: 'dashboard', component : FacultyDashboardComponent },
      { path: 'assignment-form', component : AssignmentFormComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
