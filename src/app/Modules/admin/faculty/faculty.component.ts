import { FacultyService } from './../../../Services/faculty.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Faculty } from 'src/app/models/Faculty.model';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit , DoCheck{

  constructor(private faculties: FacultyService) { }

  closeIcon = faClose;
  showDetail = false;

  data: Faculty[];
  SearchInp = '';
  selectedFaculty:Faculty;


  ngOnInit(): void {
    this.data = this.faculties.get();
  }

  ngDoCheck(): void {
    this.data = this.faculties.search(this.SearchInp);
  }

  showDetails(data:Faculty) {
    this.selectedFaculty = data;
    this.showDetail = true;
  }
  closeDetails() {
    this.showDetail = false;
  }

}
