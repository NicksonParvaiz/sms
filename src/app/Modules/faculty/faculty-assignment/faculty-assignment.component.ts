import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-assignment',
  templateUrl: './faculty-assignment.component.html',
  styleUrls: ['./faculty-assignment.component.css']
})
export class FacultyAssignmentComponent implements OnInit {

  constructor() { }
  IsShowDetail = false;
  ngOnInit(): void {
  }

  ShowDetail(e) {
    // this.IsShowDetail = e;
    console.log(e)
  }


}
