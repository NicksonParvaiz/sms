import { Component, OnInit } from '@angular/core';
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-academic-info-eidt-form',
  templateUrl: './academic-info-eidt-form.component.html',
  styleUrls: ['./academic-info-eidt-form.component.css']
})
export class AcademicInfoEidtFormComponent implements OnInit {

  constructor() { }
  backIcon = faArrowLeft;
  ngOnInit(): void {
  }

}
