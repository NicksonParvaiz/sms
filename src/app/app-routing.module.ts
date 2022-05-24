import { PersonalInfoEidtFormComponent } from './Modules/faculty/personal-info-eidt-form/personal-info-eidt-form.component';
import { AcademicInfoEidtFormComponent } from './Modules/faculty/academic-info-eidt-form/academic-info-eidt-form.component';
import { AccountsPanelComponent } from './Modules/admin/accounts-panel/accounts-panel.component';
import { NoticeFormComponent } from './Modules/admin/notice-form/notice-form.component';
import { NotificationPanelComponent } from './Modules/shared/notification-panel/notification-panel.component';
import { EmailSendingComponent } from './Modules/shared/email-sending/email-sending.component';
import { NoticeboardComponent } from './Modules/shared/noticeboard/noticeboard.component';
import { FacultyComponent } from './Modules/admin/faculty/faculty.component';
import { AdminDashboardComponent } from './Modules/admin/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main-template/main/main.component';
import { StudentsComponent } from './Modules/shared/students/students.component';

const routes: Routes = [

  {
    path: '', component: MainComponent, children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'student', component: StudentsComponent },
      { path: 'academic-info-edit', component: AcademicInfoEidtFormComponent },
      { path: 'personal-info-edit', component: PersonalInfoEidtFormComponent },
      { path: 'faculty', component: FacultyComponent },
      { path: 'noticeboard', component: NoticeboardComponent  },
      { path: 'notification', component: NotificationPanelComponent  },
      { path: 'send-email', component: EmailSendingComponent  },
      { path: 'add-notice', component: NoticeFormComponent  },
      { path: 'accounts', component: AccountsPanelComponent  },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
