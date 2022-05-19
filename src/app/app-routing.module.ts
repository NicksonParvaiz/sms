import { MainComponent } from './Modules/shared/main/main.component';
import { ForgotPasswordComponent } from './Modules/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './Modules/auth/login/login.component';
import { DashboardComponent } from './Modules/shared/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'dashboard' ,  component : MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
