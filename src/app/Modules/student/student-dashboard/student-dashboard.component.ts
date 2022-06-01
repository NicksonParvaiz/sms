import { DashboardAttendanceService } from './../../../Services/dashboard-attendance.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit, DoCheck {

  constructor(private attendace: DashboardAttendanceService) { }

  GPA: Number = 3.8;
  CGPA: Number = 3.4;

  ngOnInit(): void {

  }
  TotalDays: Number = 0;
  PresentDays: Number = 0;
  percentage;
  Total = 100;

  ngDoCheck(): void {
    this.TotalDays = this.attendace.data.TotalDays;
    this.PresentDays = this.attendace.data.PresentDays;
    this.percentage = Math.round(Number(this.attendace.data.PresentDays) / Number(this.attendace.data.TotalDays) * 100);
  }


}
