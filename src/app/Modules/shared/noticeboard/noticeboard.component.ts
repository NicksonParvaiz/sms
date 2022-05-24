import { NoticeService } from './../../../Services/notice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.css']
})
export class NoticeboardComponent implements OnInit {

  constructor(private noticeServices: NoticeService) { }

  data = [];
  ngOnInit(): void {
    this.data = this.noticeServices.get(); 
  }

}
