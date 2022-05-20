import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student-filter',
  templateUrl: './student-filter.component.html',
  styleUrls: ['./student-filter.component.css']
})
export class StudentFilterComponent implements OnInit {

  @Output() showFilter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  submitFilter() {

  }
}
