import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-panel',
  templateUrl: './accounts-panel.component.html',
  styleUrls: ['./accounts-panel.component.css']
})
export class AccountsPanelComponent implements OnInit {

  constructor() { }
  
  filterIsShow = false;
  
  ngOnInit(): void {
  }
  toggleFilter(){
    this.filterIsShow = !this.filterIsShow;
  }

}
