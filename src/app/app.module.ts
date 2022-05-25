import { FacultyModule } from './Modules/faculty/faculty.module';
import { AdminModule } from './Modules/admin/admin.module';
import { AuthModule } from './Modules/auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Modules/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './main-template/main/main.component';
 

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    FontAwesomeModule,
    AdminModule,
    FacultyModule,
    FacultyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
