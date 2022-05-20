import { FacultyComponent } from './Modules/admin/faculty/faculty.component';
import { AdminDashboardComponent } from './Modules/admin/admin-dashboard/admin-dashboard.component';
import { ForgotPasswordComponent } from './Modules/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './Modules/auth/login/login.component';
import { DashboardComponent } from './Modules/shared/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main-template/main/main.component';
import { StudentsComponent } from './Modules/shared/students/students.component';

const routes: Routes = [

  {
    path: '', component: MainComponent, children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'student', component: StudentsComponent },
      { path: 'faculty', component: FacultyComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
