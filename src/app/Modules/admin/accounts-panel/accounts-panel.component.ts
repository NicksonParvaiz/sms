import { FormGroup, FormControl } from '@angular/forms';
import { AccountsService } from './../../../Services/accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-panel',
  templateUrl: './accounts-panel.component.html',
  styleUrls: ['./accounts-panel.component.css']
})
export class AccountsPanelComponent implements OnInit {

  constructor(private accounts: AccountsService) { }

  filterIsShow = false;
  FromDate = this.accounts.get()[0].Date;
  ToDate = this.accounts.get()[this.accounts.get().length-1].Date;

  filterForm: FormGroup;

  ngOnInit(): void {

    this.filterForm = new FormGroup({
      'fromDate': new FormControl('2022-01'),
      'toDate': new FormControl()
    });
  }

  toggleFilter() {
    this.filterIsShow = !this.filterIsShow;
  }


  filtering() {
    this.FromDate = this.filterForm.value.fromDate;
    this.ToDate = this.filterForm.value.toDate;
    this.accounts.filter(this.FromDate, this.ToDate)
    this.filterIsShow = false;
  }


}
