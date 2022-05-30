import { StudentsService } from './../../../Services/students.service';
import { StudentFilterService } from './student-filter.service';
import { Component, EventEmitter, OnInit, Output, DoCheck } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-filter',
  templateUrl: './student-filter.component.html',
  styleUrls: ['./student-filter.component.css']
})
export class StudentFilterComponent implements OnInit , DoCheck{

  constructor(private studentFilterService: StudentFilterService,
    private studentService: StudentsService) { }


  FilterForm: FormGroup;


  ngOnInit(): void {

    this.FilterForm = new FormGroup({
      'class': new FormControl(this.studentFilterService.filterCriteria.Class),
      'section': new FormControl(this.studentFilterService.filterCriteria.Section),
      'classTeacher': new FormControl(this.studentFilterService.filterCriteria.ClassTeacher),
      'feeStatus': new FormControl(this.studentFilterService.filterCriteria.FeeStatus),
    })
  }

  ngDoCheck(): void {
    
  }

  submitFilter() {


    this.studentFilterService.filterCriteria = {
      Class:  this.FilterForm.value.class ,
      Section: this.FilterForm.value.section,
      ClassTeacher: this.FilterForm.value.classTeacher,
      FeeStatus: this.FilterForm.value.feeStatus
    }

    console.log(this.FilterForm.value.feeStatus)

    console.log(this.studentFilterService.getFilteredStudent())
    this.studentService.filteredStudents = this.studentFilterService.getFilteredStudent();
    this.studentFilterService.ShowFilter = false;

  }
}
