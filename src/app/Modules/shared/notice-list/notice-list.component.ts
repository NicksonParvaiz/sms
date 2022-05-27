import { NoticeService } from './../../../Services/notice.service';
import { Component, OnInit } from '@angular/core';
import { Notice } from 'src/app/models/Notice.model';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.css']
})
export class NoticeListComponent implements OnInit {

  constructor(private notice: NoticeService) { }

  data : Notice[];
  ngOnInit(): void {
    this.data = this.notice.get();
  }

}
