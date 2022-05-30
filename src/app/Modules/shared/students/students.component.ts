import { StudentFilterService } from './../student-filter/student-filter.service';
import { StudentsService } from './../../../Services/students.service';
import { Component, OnInit, DoCheck, SimpleChanges } from '@angular/core';
import { faClose , faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { filter } from 'rxjs';
import { Student } from 'src/app/models/Student.model';
import { StudentFilter } from 'src/app/models/StudentFilter.model';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, DoCheck {

  constructor(private studentsService: StudentsService,
    private StudentFilterService: StudentFilterService) { }


  data: Student[];
  selectedStudent: Student;
  SearchInp = '';
  ShowFilter ;
  
  FilterComponenets:StudentFilter;

  ngOnInit(): void {


  }

  componentCloseBtnIcon = faCircleXmark;

  ngDoCheck(): void {
    if (this.studentsService.filteredStudents.length !== 0) {
      this.data = this.studentsService.filteredStudents;
    }

    this.data = this.studentsService.filteringStudent(this.StudentFilterService.filterCriteria);
    this.data = this.studentsService.search(this.SearchInp);

    this.ShowFilter = this.StudentFilterService.ShowFilter;
    this.FilterComponenets = this.StudentFilterService.filterCriteria;

  }


  detailShow = false;
  closeIcon = faClose;

  toggleFilter(cammand: string) {
    switch (cammand) {
      case 'close':
        this.StudentFilterService.ShowFilter = false;
        break;
      case 'toggle':
        this.StudentFilterService.ShowFilter = !this.StudentFilterService.ShowFilter;
        break;
    }
  }

  showDetail(selectedStudent: Student) {
    this.selectedStudent = selectedStudent;
    this.detailShow = true;
  }
  closeDetails() {
    this.detailShow = false;
  }


  eliminatingFilterCriteria(item){
    switch(item){
      case 'Class':
        this.StudentFilterService.filterCriteria.Class = '';
        break;
        
      case 'ClassTeacher':
        this.StudentFilterService.filterCriteria.ClassTeacher = '';
        break;

      case 'Section':
        this.StudentFilterService.filterCriteria.Section = '';
        break;

      case 'FeeStatus':
        this.StudentFilterService.filterCriteria.FeeStatus = '';
        break;

    }
  }
  

}
