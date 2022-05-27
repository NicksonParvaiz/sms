import { Injectable } from '@angular/core';
import { Notification } from '../models/Notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  notifications: Notification[] = [
    {
      Id: 1,
      Title: 'Absent Alert',
      Description: 'has made his third absent in this month',
      FirstAbsent: '2/5/2022',
      SecondAbsent: '12/5/2022',
      ThirdAbsent: '25/5/2022',
      AbsentUsername: 'Nickson',
      forRole: 'faculty'
    },
    {
      Id: 2,
      Title: 'Absent Alert',
      Description: 'has made his third absent in this month',
      FirstAbsent: '2/5/2022',
      SecondAbsent: '12/5/2022',
      ThirdAbsent: '25/5/2022',
      AbsentUsername: 'Sir Subhan',
      forRole: 'admin'
    },
    {
      Id: 3,
      Title: 'Absent Alert',
      Description: 'has made his third absent in this month',
      FirstAbsent: '4/5/2022',
      SecondAbsent: '6/5/2022',
      ThirdAbsent: '22/5/2022',
      AbsentUsername: 'Asad',
      forRole: 'faculty'
    },
    {
      Id: 4,
      Title: 'Absent Alert',
      Description: 'has made her third absent in this month',
      FirstAbsent: '4/5/2022',
      SecondAbsent: '6/5/2022',
      ThirdAbsent: '22/5/2022',
      AbsentUsername: 'Sana',
      forRole: 'admin'
    }
  ];

  get(){
    return this.notifications;
  }

}
