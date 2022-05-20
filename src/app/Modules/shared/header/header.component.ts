import { SidebarService } from './../sidebar/sidebar.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { faBell , faCaretDown , faBars ,faAngleLeft, faEarListen  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , DoCheck {

  constructor(private sidebar : SidebarService) { }
  notificationIcon = faBell;
  dropDownIcon = faCaretDown;
  menuIcon = faBars;

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if(this.sidebar.isExpand){
      this.menuIcon = faAngleLeft; 
    }
    else{
      this.menuIcon = faBars; 
    }
  }
  sidebarToggle(){
      this.sidebar.isExpand = !this.sidebar.isExpand;
  }

}
