import { Component, OnInit } from '@angular/core';
import { faArrowLeft , faImage} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-notice-form',
  templateUrl: './notice-form.component.html',
  styleUrls: ['./notice-form.component.css']
})
export class NoticeFormComponent implements OnInit {

  constructor() { }
  backIcon = faArrowLeft;
  imagePlaceHolder = faImage  ;

  ngOnInit(): void {
  }
 

}
