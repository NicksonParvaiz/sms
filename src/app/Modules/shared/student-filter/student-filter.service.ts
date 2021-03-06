import { StudentFilter } from './../../../models/StudentFilter.model';
import { StudentsService } from './../../../Services/students.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentFilterService {

  constructor(private studentService: StudentsService) { }

  filterCriteria: StudentFilter = {
    Class: 'All',
    Section: 'All',
    ClassTeacher: 'All',
    FeeStatus: 'All'

  };

  ShowFilter = false;

  // getFilteredStudent() {

  //   return this.studentService.get().filter(x =>
  //     x.Class == this.filterCriteria.Class &&
  //     x.ClassTeacher == this.filterCriteria.ClassTeacher &&
  //     x.Section == this.filterCriteria.Section &&
  //     x.FeeStatus == this.filterCriteria.FeeStatus
  //   )
  // }



  Classes: string[];
  Sections: string[];
  ClassTeachers: string[];
  FeeStatus: string[];





}
