import { Component, OnInit } from '@angular/core';
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-email-sending',
  templateUrl: './email-sending.component.html',
  styleUrls: ['./email-sending.component.css']
})
export class EmailSendingComponent implements OnInit {

  constructor() { }
  backIcon = faArrowLeft;
  ngOnInit(): void {
  }

}
