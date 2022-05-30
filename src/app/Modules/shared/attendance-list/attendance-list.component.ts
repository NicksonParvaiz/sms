import { StudentsService } from './../../../Services/students.service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student.model';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit {

  constructor(private StudentsService: StudentsService) { }

  data: Student[];

  ngOnInit(): void {
    this.data = this.StudentsService.get();
    
  }

}
