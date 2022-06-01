import { Accounts } from './../models/Accounts.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor() { }

  data: Accounts[] = [
    { Date: '2021-10', Fees: 50, Salaries: 30 },
    { Date: '2021-11', Fees: 60, Salaries: 35 },
    { Date: '2021-12', Fees: 72, Salaries: 40 },
    { Date: '2022-01', Fees: 65, Salaries: 31 },
    { Date: '2022-02', Fees: 58, Salaries: 29 },
    { Date: '2022-03', Fees: 42, Salaries: 18 },
    { Date: '2022-04', Fees: 83, Salaries: 35 }
  ]
  filteredData: Accounts[] = this.data;

  get(){
    return this.filteredData;
  }

  months = ["Jan", "Feb", "March", "April", "May", "June", "July",
    "Aug", "Sep", "Oct", "Nov", "Dec"];


  filter(from, to) {
    let startFrom = this.data.indexOf(this.data.find(x => x.Date === from));
    let endAt = this.data.indexOf(this.data.find(x => x.Date === to))
    this.filteredData = this.data.slice(startFrom, endAt + 1);
    return this.data.slice(startFrom, endAt + 1);

  }

}
