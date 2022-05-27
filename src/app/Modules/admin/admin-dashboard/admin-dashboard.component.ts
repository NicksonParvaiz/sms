import { FacultyService } from './../../../Services/faculty.service';
import { StudentsService } from './../../../Services/students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private students: StudentsService , private faculty : FacultyService) { }

  studentCount: Number;
  facultyCount: Number;
  ngOnInit(): void {
    this.studentCount = this.students.get().length;
    this.facultyCount = this.faculty.get().length;
  }

}
