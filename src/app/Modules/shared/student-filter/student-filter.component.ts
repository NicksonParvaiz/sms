import { StudentsService } from './../../../Services/students.service';
import { StudentFilterService } from './student-filter.service';
import { Component, EventEmitter, OnInit, Output, DoCheck } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { OnChanges } from '@angular/core';
// import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-student-filter',
  templateUrl: './student-filter.component.html',
  styleUrls: ['./student-filter.component.css']
})
export class StudentFilterComponent implements OnInit, DoCheck {

  constructor(private studentFilterService: StudentFilterService,
    private studentService: StudentsService) { }


  Classes: string[];
  Sections: string[];
  ClassTeachers: string[];
  FeeStatus: string[];

  FilterForm: FormGroup;

  ngOnInit(): void {

    this.FilterForm = new FormGroup({
      'class': new FormControl(this.studentFilterService.filterCriteria.Class),
      'section': new FormControl(this.studentFilterService.filterCriteria.Section),
      'classTeacher': new FormControl(this.studentFilterService.filterCriteria.ClassTeacher),
      'feeStatus': new FormControl(this.studentFilterService.filterCriteria.FeeStatus),
    })

    this.studentFilterService.Classes = [...new Set(this.studentService.get().map(item => item.Class))];
    this.studentFilterService.Sections = [...new Set(this.studentService.get().map(item => item.Section))];
    this.studentFilterService.ClassTeachers = [...new Set(this.studentService.get().map(item => item.ClassTeacher))];
    this.studentFilterService.FeeStatus = [...new Set(this.studentService.get().map(item => item.FeeStatus))];
  }


  ngDoCheck(): void {
    setTimeout(() => {

      this.studentFilterService.filterCriteria = {
        Class: this.FilterForm.value.class,
        Section: this.FilterForm.value.section,
        ClassTeacher: this.FilterForm.value.classTeacher,
        FeeStatus: this.FilterForm.value.feeStatus
      }
      this.studentFilterService.ClassTeachers = this.studentFilterService.ClassTeachers = [...new Set(this.studentService.filteredStudents.map(item => item.ClassTeacher))];
      this.studentFilterService.Classes = this.studentFilterService.Classes = [...new Set(this.studentService.filteredStudents.map(item => item.Class))];

    }, 1000)

    this.Classes = this.studentFilterService.Classes;
    this.Sections = this.studentFilterService.Sections;
    this.ClassTeachers = this.studentFilterService.ClassTeachers;
    this.FeeStatus = this.studentFilterService.FeeStatus;

 

  }


  submitFilter() {


    this.studentFilterService.filterCriteria = {
      Class: this.FilterForm.value.class,
      Section: this.FilterForm.value.section,
      ClassTeacher: this.FilterForm.value.classTeacher,
      FeeStatus: this.FilterForm.value.feeStatus
    }

    this.studentFilterService.ShowFilter = false;

  }





  // =============================================






}
