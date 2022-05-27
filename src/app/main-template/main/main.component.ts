import { AuthService } from 'src/app/Services/auth.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { SidebarService } from 'src/app/Modules/shared/sidebar/sidebar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, DoCheck {

  constructor(private sidebar: SidebarService, private auth: AuthService) { }

  ngOnInit(): void {
    // this.auth.loginUser = JSON.parse(localStorage.getItem('loginUser'));
  
  
  }



  sideBarExpand: boolean;

  ngDoCheck(): void {
    this.sideBarExpand = this.sidebar.isExpand;

  }

}
