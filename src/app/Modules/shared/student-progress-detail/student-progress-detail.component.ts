import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-progress-detail',
  templateUrl: './student-progress-detail.component.html',
  styleUrls: ['./student-progress-detail.component.css']
})
export class StudentProgressDetailComponent implements OnInit {

  constructor() { }

  ShowFilter = false;
  ngOnInit(): void {
  }

  filterToggle(){
    this.ShowFilter = !this.ShowFilter;
  }

}
