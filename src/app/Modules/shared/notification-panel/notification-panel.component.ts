import { AuthService } from 'src/app/Services/auth.service';
import { NotificationService } from './../../../Services/notification.service';
import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/models/Notification.model';

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.css']
})
export class NotificationPanelComponent implements OnInit  {

  ShowDetail = false;
  constructor(private notifications: NotificationService , private auth : AuthService) { }

  data: Notification[];
  selectedNotification:Notification;
  ngOnInit(): void {
    this.data = this.notifications.get().filter(x => x.forRole == this.auth.loginUser.role)
  }

  getDetail(item: Notification) {
    this.selectedNotification = item;
    setTimeout(()=>{
      this.ShowDetail = true;
    },500)
  }




}
