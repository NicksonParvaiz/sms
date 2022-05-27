import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentsService } from 'src/app/Services/assignments.service';

@Component({
  selector: 'app-faculty-assignment-detail',
  templateUrl: './faculty-assignment-detail.component.html',
  styleUrls: ['./faculty-assignment-detail.component.css']
})
export class FacultyAssignmentDetailComponent implements OnInit {

  constructor(private assignments : AssignmentsService) { }
  data : Assignment;
  ngOnInit(): void {
    this.data = this.assignments.SelectAssignment;
  }



}

