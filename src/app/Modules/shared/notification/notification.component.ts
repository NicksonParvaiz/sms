import { NotificationService } from './../../../Services/notification.service';
import { Notification } from './../../../models/Notification.model';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() notificationsFor ;
  constructor(private notification : NotificationService) { }
  data :Notification[];
  ngOnInit(): void {
    this.data = this.notification.get().filter(x => x.forRole == this.notificationsFor);
  }

}
