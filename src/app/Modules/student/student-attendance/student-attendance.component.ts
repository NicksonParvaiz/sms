import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.css']
})
export class StudentAttendanceComponent implements OnInit {

  constructor() { }

  ShowFilter = false;
  ngOnInit(): void {
  }

  filterToggle(){
    this.ShowFilter = !this.ShowFilter;
  }

}
