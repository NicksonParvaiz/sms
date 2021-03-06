import { StudentsService } from './../../../Services/students.service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student.model';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-assignment-submissions',
  templateUrl: './assignment-submissions.component.html',
  styleUrls: ['./assignment-submissions.component.css']
})
export class AssignmentSubmissionsComponent implements OnInit {

  constructor(private StudentsService: StudentsService) { }
  data: Student[];
  backIcon = faArrowLeft;

  Showfilter = false;
  ngOnInit(): void {
    this.data = this.StudentsService.get();
  }


  toggleFilter() {
    this.Showfilter = !this.Showfilter;
  }
  
}
