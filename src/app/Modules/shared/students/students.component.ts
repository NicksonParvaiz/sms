import { StudentFilterService } from './../student-filter/student-filter.service';
import { StudentsService } from './../../../Services/students.service';
import { Component, OnInit, DoCheck, SimpleChanges } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { student } from 'src/app/models/student.model';
import { filter } from 'rxjs';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, DoCheck {

  constructor(private studentsService: StudentsService,
    private StudentFilterService: StudentFilterService) { }


  data: student[];
  selectedStudent: student;
  SearchInp = '';

  ngOnInit(): void {

    this.data = this.studentsService.get();
    
  }
  
  ngDoCheck(): void {
    this.data = this.studentsService.search(this.SearchInp);
    // this.data = this.studentsService.filter();

  }

  
  ShowFilter = false;
  detailShow = false;
  closeIcon = faClose;

  toggleFilter(cammand: string) {
    switch (cammand) {
      case 'close':
        this.ShowFilter = false;
        break;
      case 'toggle':
        this.ShowFilter = !this.ShowFilter;
        break;
    }
  }

  showDetail(selectedStudent: student) {
    this.selectedStudent = selectedStudent;
    this.detailShow = true;
  }
  closeDetails() {
    this.detailShow = false;
  }



}
