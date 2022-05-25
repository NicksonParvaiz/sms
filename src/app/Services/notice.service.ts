import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Notice } from '../models/Notice.model';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private router:Router) { }


  noticeList: Notice[] = [
    {
      Id: 1,
      Title: 'Sport Week',
      Description: 'Annual sports week is going to be held on 23rd may to 30th may 2022, do particepate and enjoy',
      PrivacyStatus: 'All',
      ImgUrl: '/assets/images/sportsweek.png',
      PostedDate: 'Tue May 24 2022 16:34'
    },
    {
      Id: 2,
      Title: 'Summer Champ',
      Description: 'Summer Champ is going to be held on 23rd may to 10th june 2022, do particepate and enjoy',
      PrivacyStatus: 'All',
      ImgUrl: '/assets/images/Summer Camp.png',
      PostedDate: 'Tue May 24 2022 16:34'
    },
    {
      Id: 3,
      Title: 'Annual Result Day',
      Description: 'Annual Result Day is going to be held on 25th July 2022.',
      PrivacyStatus: 'All',
      ImgUrl: '/assets/images/annual result day.jpg',
      PostedDate: 'Tue May 24 2022 16:34'
    },
  ]

  get() {
    return this.noticeList;
  }
  add(data: any) {

    let newNotice: Notice = {
      Id: this.noticeList[this.noticeList.length - 1].Id + 1,
      Title: data.title,
      Description: data.description,
      PrivacyStatus: data.privacyStatus,
      ImgUrl: '/assets/images/' + data.imgUrl.substring(12, data.imgUrl.length),
      PostedDate: new Date(Date.now()).toString().substring(0, 21)
    }
    this.router.navigateByUrl('noticeboard');
    this.noticeList.push(newNotice)
  }

}
