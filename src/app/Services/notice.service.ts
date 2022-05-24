import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor() { }


  noticeList = [
    {
      Id: 1,
      Title: 'Sport Week',
      Description: 'Annual sports week is going to be held on 23rd may to 30th may 2022, do particepate and enjoy',
      PrivacyStatus: 'All',
      ImgUrl: '/assets/images/sportsweek.png',
      PostedDate: '20th May 2022'
    },
    {
      Id: 2,
      Title: 'Summer Champ',
      Description: 'Summer Champ is going to be held on 23rd may to 10th june 2022, do particepate and enjoy',
      PrivacyStatus: 'All',
      ImgUrl: '/assets/images/Summer Camp.png',
      PostedDate: '4th june 2022'
    },
    {
      Id: 3,
      Title: 'Annual Result Day',
      Description: 'Annual Result Day is going to be held on 25th July 2022.',
      PrivacyStatus: 'All',
      ImgUrl: '/assets/images/annual result day.jpg',
      PostedDate: '1st July 2022'
    },
  ]

  get() {
    return this.noticeList;
  }

}
