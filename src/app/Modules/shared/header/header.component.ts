import { SidebarService } from './../sidebar/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { faBell , faCaretDown , faBars   } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sidebar : SidebarService) { }
  notificationIcon = faBell;
  dropDownIcon = faCaretDown;
  menuIcon = faBars;

  ngOnInit(): void {
  }

  sidebarToggle(){
      this.sidebar.isExpand = !this.sidebar.isExpand;
  }

}
