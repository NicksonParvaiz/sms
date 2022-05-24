import { StudentFilterService } from './student-filter.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-filter',
  templateUrl: './student-filter.component.html',
  styleUrls: ['./student-filter.component.css']
})
export class StudentFilterComponent implements OnInit {

  constructor(private studentFilterService: StudentFilterService) { }

  FilterForm: FormGroup;

  ngOnInit(): void {

    this.FilterForm = new FormGroup({
      'class': new FormControl(''),
      'section': new FormControl(''),
      'classTeacher': new FormControl(''),
      'feeStatus': new FormControl(''),
    })

  }

  submitFilter() {
    this.studentFilterService.filterCriteria = this.FilterForm.value;
  }
}
