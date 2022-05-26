import { AuthService } from 'src/app/Services/auth.service';
import { NoticeService } from './../../../Services/notice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.css']
})
export class NoticeboardComponent implements OnInit {

  constructor(private noticeServices: NoticeService, private auth: AuthService) { }

  loggedInuserRole: string;


  data = [];
  ngOnInit(): void {
    this.data = this.noticeServices.get();
    this.loggedInuserRole = this.auth.loginUser.role;
  }

}
