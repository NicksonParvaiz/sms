import { Assignment } from './../../../models/assignment.model';
import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/Services/assignments.service';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  @Output() showDetail = new EventEmitter<any>();
  constructor(private assignments: AssignmentsService) { }
  data: Assignment[];
  ngOnInit(): void {
    this.data = this.assignments.get();
    
  }
  detail(item: Assignment) {
    this.assignments.SelectAssignment = item;
    this.showDetail.emit(true);
    console.log(item)
  }

}
